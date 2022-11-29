import axios from 'axios'

const service = axios.create({
  // 请求路由
  baseURL: '',
  // 请求超时时间
  timeout: 10000,
})

export default service
