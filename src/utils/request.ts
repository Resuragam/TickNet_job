import axios from 'axios'

const service = axios.create({
  // 请求路由
  baseURL: 'http://49.123.0.26:8665',
  // 请求超时时间
  timeout: 10000,
})

service.interceptors.response.use(
  response => response.data,
)
export default service
