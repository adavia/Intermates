import api from '../config/api'

export const createUser = async(user) => {
	try {
		const resp = await api.post(`/users`, user)
		return resp
	} catch (resp) {
		return resp
	}
}