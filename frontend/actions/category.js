import api from '../config/api'

export const fetchCategories = async(req) => {
	try {
		const resp = await api.fetch(`/categories`, req)
		return resp
	} catch (resp) {
		return resp
	}
}