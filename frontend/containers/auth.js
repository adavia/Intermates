import { Container } from 'unstated'
import { Socket } from 'phoenix-channels'
import { getCookie, setCookie, deleteCookie } from '../config/cookie'
import { login, authenticateUser, logout } from '../actions/auth'
import config from '../env'

const SOCKET_URL = config.socket

class AuthContainer extends Container {
	constructor(props = {}) {
		super(props)

		this.initialState = {
			auth: props.auth || false,
			currentUser: props.currentUser || {},
			socket: null
		}

		this.state = this.initialState
	}

	login = async(user) => {
	  try {
	    const resp = await login(user)
	    this.setAuth(resp.data.user, resp.data.token)
	    return resp
	  } catch ({ resp }) {
	    return resp
	  }
	}

	authenticateUser = async(req) => {
	  try {
	    const resp = await authenticateUser(req)
	    return resp
	  } catch ({ resp }) {
	    return resp
	  }
	}

	logout = async(id)  => {
    try {
    	const resp = await logout(id)
      this.setState({
        auth: false,
        currentUser: {}
      })
      deleteCookie('token')
      return resp
    } catch ({ resp }) {
      return resp
    }
  }

  setAuth = (user, token) => {
		this.setState({
	    auth: true,
	    currentUser: user
	  })

	  setCookie('token', token)
  }

	connectToSocket = async () => {
    const token = getCookie('token')
    const socketConnection = new Socket(SOCKET_URL, {
      params: { token }
    })

		socketConnection.connect()

		await this.setState({ socket: socketConnection })
    return this.state.socket
  }
}

export default AuthContainer