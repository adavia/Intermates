import api from '../config/api'

export const login = async(user) => {
  try {
    const resp = await api.post(`/sessions`, user)
    return resp
  } catch (resp) {
    return resp
  }
}

export const authenticateUser = async(req) => {
  try {
    const resp = await api.fetch(`/sessions/me`, req)
    return resp
  } catch (resp) {
    return resp
  }
}

export const logout = async(id) => {
  try {
    const resp = await api.delete(`/sessions/${id}`)
    return resp
  } catch (resp) {
    return resp
  }
}