import { Container } from 'unstated'
import { createUser } from '../actions/user'

class UserContainer extends Container {
	createUser = async(user, authStore) => {
		try {
			const resp = await createUser(user)
	    authStore.setAuth(resp.data.user, resp.data.token)
			return resp
		} catch ({ resp }) {
			return resp
		}
	}
}

export default UserContainer