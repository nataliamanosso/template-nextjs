import axios from 'axios'
import { getSession } from 'next-auth/react'

export const api = axios.create({
  baseURL: 'https://your-api-url/api',
})

api.interceptors.request.use(
  async (config) => {
    const session = await getSession()
    if (session) {
      const token = session.id_token
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  },
)
