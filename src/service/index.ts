import { BASE_URL, TIME_OUT } from './config'
import HFRequest from './request'

const hyRequest = new HFRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
})

export default hyRequest
