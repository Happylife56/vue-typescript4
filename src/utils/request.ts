'use strict'
/**
 * @file axios请求封装
 */
import axios from 'axios'
import { AppModule } from '@/store/modules/app'
import { Message } from 'element-ui'
// 响应时间
axios.defaults.timeout = 10000
// `withCredentails`选项表明了是否是跨域请求
axios.defaults.withCredentials = true
// 设置默认请求头
axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest',
  'Content-Type': 'application/json; charset=UTF-8'
}

// 添加请求拦截器
axios.interceptors.request.use(
  (config) => {
    // 获取token
    if (AppModule.token) {
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = AppModule.token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 添加返回拦截器
axios.interceptors.response.use(
  (response) => {
    // 设置token不过期
    AppModule.SET_TOKEN_STATE(false)
    if (typeof response !== 'undefined' && (response.data.code == 1001 || response.data.code == 0)) {
      return response.data
    } else if (typeof response !== 'undefined' && response.data.code == 20001) {
      AppModule.SET_TOKEN_STATE(false) // 设置token过期
    } else if (typeof response !== 'undefined' && response.data.code == 20008) {
      AppModule.SET_QUIT_SHIFT(true) // 设置当前账号已交班
      // Message.error(response.data.msg)
    } else if (typeof response !== 'undefined' && response.data.msg) {
      AppModule.SET_QUIT_SHIFT(false)
      if (response.data.code !== 1006) checkCode(response.data.msg)
      return response.data
    } else {
      // checkCode('操作失败，请重试')
      checkCode(response.data.message)
    }
    return ''
  },
  (error) => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '请求错误'
          break
        case 401:
          error.message = '登录过期，请重新登录'
          // 跳到登录界面
          localStorage.clear()
          sessionStorage.clear()
          break
        case 403:
          error.message = '拒绝访问'
          break
        case 404:
          error.message = '请求失败'
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
          error.message = '无法连接服务器'
          break
        case 503:
          error.message = '服务不可用'
          break
        case 504:
          error.message = '连接服务器超时'
          break
        case 505:
          error.message = 'HTTP版本不受支持'
          break
        default:
      }
    } else {
      // error.message = '无法连接服务器'
    }
    // 对返回的错误处理
    return Promise.reject(error)
  }
)

// 请求失败错误信息提示
function checkCode(message: string) {
  (Message as any).closeAll()
  Message.error(message)
}
export default {
  async Get(url: string, params: any) {
    let res = await axios.get(url, { params }).then((res) => res.data).catch((err) => {
      checkCode(err.message)
    })
    return res
  },
  async Post(url: string, params: any) {
    let res = await axios({
      method: 'post',
      url,
      data: params
    }).then((res) => res.data).catch((err) => {
      checkCode(err.message)
    })
    return res
  },
  async Put(url: string, params: any) {
    let res = await axios({
      method: 'post',
      url,
      data: params
    }).then((res) => res.data).catch((err) => {
      checkCode(err.message)
    })
    return res
  },
  async Delete(url: string, params: any) {
    let res = await axios.delete(url, { params }).then((res) => res.data).catch((err) => {
      checkCode(err.message)
    })
    return res
  }
}
