import {baserequest} from 'network/baserequest.js'
const baseURL = '/api'

// 首页问题列表
export function testData(url, params) {
  return baserequest({
    url: baseURL + url,
    method: 'post',
    data: params
  })
}