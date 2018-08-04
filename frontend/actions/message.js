import api from '../config/api'

export const fetchPaginatedMessages = async(category_id, params) => {
	try {
		const resp = await api.fetch(`/categories/${category_id}/messages`, false, params)
		return resp
	} catch (resp) {
		return resp
	}
}