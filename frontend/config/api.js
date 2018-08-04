import config from '../env'
import { getCookie } from './cookie'
import axios from 'axios'

const API = config.api

const headers = (req) => {
  const token = getCookie('token', req)

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  if (token) {
    headers['Authorization'] = `Bearer: ${token}`
  }
  
  return headers
}

const queryString = (params) => {
  const query = Object.keys(params)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join('&')
  return `${query.length ? '?' : ''}${query}`
}

export default {
  async fetch(url, req = {}, params = {}) {
    const response = await axios.get(`${API}${url}${queryString(params)}`, {
      headers: headers(req)
    })
  
    return response
  },

  async post(url, data) {
    const response = await axios.post(`${API}${url}`, data, {
      headers: headers()
    })
    
    return response
  },

  async put(url, data) {
    const response = await axios.put(`${API}${url}`, data, {
      headers: headers()
    })

    return response
  },

  async delete(url) {
    const response = await axios.delete(`${API}${url}`, {
      headers: headers()
    })

    return response
  },
}