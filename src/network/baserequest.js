import axios from 'axios'
import { Toast } from 'vant'

export function baserequest(config) {
  // 创建axios实例
  const instance = axios.create({
    // baseURL: '',
    timeout: 3000
  })
  // 请求拦截
  instance.interceptors.request.use(
    config => {
      Toast.loading({
        message: '加载中...',
        forbidClick: true
      })
      if (config.uploadFile) {
        config.headers['Content-Type'] = 'multipart/form-data'
      } else {
        config.headers['Content-Type'] = 'application/json;charset=utf-8'
      }
    return config
    },
    err => {
      console.log(err)
      Toast.clear()
      return Promise.reject(err)
    })
    // 响应拦截
    instance.interceptors.response.use(
      res => {
        Toast.clear()
        return res.data
      },
      error => {
        debugger
        Toast.clear()
        console.log('err',error.response)
        if (error) {
          switch (error.response.status) {
            case 400:
              error.message = '请求错误'
              break
    
            case 401:
              error.message = '未授权，请登录'
              break
    
            case 403:
              error.message = '拒绝访问'
              break
    
            case 404:
              error.message = `请求地址出错`
              break
    
            case 408:
              error.message = '请求超时'
              break
    
            case 500:
              error.message = '服务器内部错误'
              break
    
            case 501:
              error.message = '服务未实现'
              break
    
            case 502:
              error.message = '网关错误'
              break
    
            case 503:
              error.message = '服务不可用'
              break
    
            case 504:
              error.message = '网关超时'
              break
    
            case 505:
              error.message = 'HTTP版本不受支持'
              break
    
            default:
          }
          Toast(error.message)
        }
        return Promise.reject(error)
      })
    return instance(config)
}