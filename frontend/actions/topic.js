import api from '../config/api'

export const fetchTopics = async(req, params) => {
	try {
		const resp = await api.fetch(`/topics`, req, params)
		return resp
	} catch (resp) {
		return resp
	}
}

export const createTopic = async(topic) => {
	try {
		const resp = await api.post(`/topics`, topic)
		return resp
	} catch (resp) {
		return resp
	}
}

export const editTopic = async(req, id) => {
  try {
    const resp = await api.fetch(`/topics/${id}/edit`, req)
    return resp
  } catch (resp) {
    return resp
  }
}

export const updateTopic = async(topic, id) => {
  try {
    const resp = await api.put(`/topics/${id}`, topic)
    return resp
  } catch (resp) {
    return resp
  }
}