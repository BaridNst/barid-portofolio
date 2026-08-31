import axios from 'axios'

const api = axios.create({ baseURL: '/api' })

export const getMessages = () => api.get('/messages').then((r) => r.data)
export const sendMessage = (payload) => api.post('/messages', payload).then((r) => r.data)