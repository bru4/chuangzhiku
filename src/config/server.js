import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'production' ? '' : 'https://test.com'

const config = {
  baseURL: baseURL,
  timeout: 5000
}

var Query = axios.create(config)

//添加请求拦截器
Query.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

//添加响应拦截器
Query.interceptors.response.use((response) => {
  return response.data;
}, (error) => {
  return Promise.reject(error)
})

export default Query
