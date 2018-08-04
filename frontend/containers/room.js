import { Container } from 'unstated'
import { Presence } from 'phoenix-channels'
import moment from 'moment'
import groupBy from 'lodash/groupBy'
import mapKeys from 'lodash/mapKeys'
import { fetchPaginatedMessages } from '../actions/message'

class RoomContainer extends Container {
	constructor(props) {
		super(props)

    this.initialState = {
			channel: null,
			messages: [],
			users: [],
			pagination: null
		}
		
		this.idle = null
    this.timeOut = 30 * 1000
		this.state = this.initialState
	}

	joinChannel = (resp) => {
		this.setState({
			messages: resp.messages.reverse(),
			pagination: resp.pagination
		})

		this.resetTimer(true)
	}

  fetchPaginatedMessages = async(category_id, params) => {
    try {
      const resp = await fetchPaginatedMessages(category_id, params)
      this.setState(prevState => ({
        messages: [...resp.data.messages.reverse(), ...prevState.messages],
        pagination: resp.data.pagination
      }))
      return resp
    } catch ({ resp }) {
      return resp
    }
  }

	resetTimer = (skipPush = false) => {
		const { channel } = this.state 

    if (!skipPush) {
      channel.push('user_active')
    }

    clearTimeout(this.idle)

    this.idle = setTimeout(() => {
      channel.push('user_idle')
    }, this.timeOut)
  }

	syncUserList = (presences) => {
    const activeUsers = Presence
      .list(presences, (id, { metas: [first] }) => 
        ({...first.user, status: first.status}))
    this.setState({ users: activeUsers })
  }

  groupMessagesByDate = (messages) => {
    const list = messages.map((message) => {
      message.day = moment(message.inserted_at).format('MMMM Do')
      return message
    })

    const groupedMessages = groupBy(list, 'day')
    const dayGroups = []

    mapKeys(groupedMessages, (value, key) => {
      dayGroups.push({ date: key, messages: value })
    })

    return dayGroups
  }

  handlePresenceDiff = (diff) => {
    // Separate out the response from the server into joins and leaves
    const { joins, leaves } = diff
    if (!joins && !leaves) {
      // Throw out the diff if we're missing both joins and leaves!
      return
    }

    // For all new statuses, add status messages to the chat log.
    Object.keys(joins).forEach(user => {
    	const userData = joins[user]['metas']
      const status = this.getUserStatus(userData)
      this.statusMessage(userData[0], status)
    })

    // Finally, display messages for each person that leaves the chat too!
    Object.keys(leaves).forEach(user => {
    	const userData = leaves[user]['metas']
      if (Object.keys(joins).indexOf(user) !== -1) {
        return
      }
      this.statusMessage(userData[0], 'gone')
    })
  }

  getUserStatus = metas => metas.length > 0 && metas[0]['status']

  statusMessage = (data, status) => {
    this.addMessageToList({
      id: `${data.user.id}_${Date.now()}`, 
      user: data.user,
      content: ` is ${status}`,
      status: status, 
    })
  }

  addMessageToList = (message) => {
  	this.setState(prevState => ({
			messages: [...prevState.messages, message]
  	}))

  	// const allMessages = this.state.messages
  	// const index = allMessages.length - 1
  	// const newCollection = update(allMessages, {
  	// 	[index]: { messages: { $push: [message] } }
  	// })
  	
  }

  clearMessages = () => {
  	this.setState(this.initialState)
  }

	connectToChannel = async(socket, id) => {
    let presences = {}

    if (!socket) { 
      return false
    }
		
		await this.setState({
			channel: socket.channel(`room:${id}`)
		})

		const { channel } = this.state

		channel.join()
			.receive('ok', resp => this.joinChannel(resp))
     	.receive('error', resp => console.log('Unable to join channel', resp))

    channel.on('new_message', (message) => {
      this.addMessageToList(message)
    })

    channel.on('presence_state', (state) => {
      presences = Presence.syncState(presences, state)
      this.syncUserList(presences)
    })

    channel.on('presence_diff', (diff) => {
      presences = Presence.syncDiff(presences, diff)
      this.handlePresenceDiff(diff)
      this.syncUserList(presences)
    })
  }

  createMessage = (message) => {
  	const { channel } = this.state

    this.resetTimer()
    channel.push('new_message', message)
      .receive('ok', resp => {
        console.log('Message sent!')
      })
      .receive('error', resp => {
        console.log('Failed to send message:', resp)
    })
  }

  leaveChannel = () => {
  	const { channel } = this.state 
    if (channel) { channel.leave() }
  }
}

export default RoomContainer