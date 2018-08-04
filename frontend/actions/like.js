import api from '../config/api'

export const toggleLike = async(topic_id) => {
	try {
		const resp = await api.post(`/topics/${topic_id}/likes`)
		return resp
	} catch (resp) {
		return resp
	}
}