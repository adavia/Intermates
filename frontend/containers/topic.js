import update from 'react-addons-update'
import { Container } from 'unstated'
import { fetchTopics, createTopic, editTopic, updateTopic } from '../actions/topic'

class TopicContainer extends Container {
	constructor(props = {}) {
		super(props)

		this.initialState = {
			topics: props.topics || [],
			pagination: props.pagination || null,
			selectedTopic: props.topic || {}
		}
		
		this.state = this.initialState
	}

	fetchTopics = async(req, params) => {
		try {
			const resp = await fetchTopics(req, params)
			this.setState({ 
				topics: resp.data.topics,
				pagination: resp.data.pagination
			})
			return resp
		} catch ({ resp }) {
			return resp
		}
	}

	createTopic = async(topic) => {
		try {
			const resp = await createTopic(topic)
			this.setState(prevState => ({
				topics: [...prevState.topics, resp.data.topic]
			}))
			return resp
		} catch ({ resp }) {
			return resp
		}
	}

	editTopic = async(req, id) => {
    try {
      const resp = await editTopic(req, id)
  		this.setState({ selectedTopic: resp.data.topic })
      return resp
    } catch ({ resp }) {
      return resp
    }
  }

  updateTopic = async(topic, id) => {
		try {
			const resp = await updateTopic(topic, id)
			// this.setState(prevState => ({
			// 	topics: [...prevState.topics, resp.data.topic]
			// }))
			return resp
		} catch ({ resp }) {
			return resp
		}
	}

	toggleTopicLikes = (topic) => {
		const allTopics = this.state.topics
    const index = allTopics.findIndex(t => { 
        return t.id == topic.id
    })
    const foundTopic = allTopics[index]
		let updatedTopic = foundTopic
		if (topic.liked) {
			updatedTopic = update(foundTopic, {
	    	liked: {$set: false},
	    	likes_count: {$set: foundTopic.likes_count -= 1}
	    })
		} else {
			updatedTopic = update(foundTopic, {
	    	liked: {$set: true},
	    	likes_count: {$set: foundTopic.likes_count += 1}
	    })
		}
   
    const data = update(allTopics, { 
    	$splice: [[index, 1, updatedTopic]] 
    })

    this.setState({ topics: data })
	}
	
	reset = () => {
		this.setState({ topics: [] })
	}
}

export default TopicContainer