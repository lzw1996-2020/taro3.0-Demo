/*
 * @Description: 
 * @Version: 
 * @Autor: Liang Zhong Wei
 * @Date: 2020-12-11 10:28:56
 * @LastEditors: Liang Zhong Wei
 * @LastEditTime: 2020-12-11 11:29:42
 */
import Taro from '@tarojs/taro'
import { baseApiUrl } from './api'

function requestUrl(url) {
  if (Taro.getEnv() === 'WEAPP') {
    return baseApiUrl + url
  }
}

export default function fetch(options) {
  let { url, method = 'GET', data, isToken = false, isShowLoading = false } = options
  let reqUrl = requestUrl(url)
  if (isShowLoading) {
    Taro.showLoading()
  }
  return Taro.request({
    url: reqUrl,
    method,
    data,
    header: {
      "Accept": "*/*",
      "Content-Type": "application/json",
    }
  }).then(res => {
    if (isShowLoading) {
      Taro.hideLoading()
    }
    let results = res.data
    const { code, message, result, subMessage, success } = results
    if (res.statusCode === 200) {
      if (success === true) {
        return Promise.resolve(result)
      } else {
        return Promise.reject({ code, message })
      }
    } else {
      return Promise.reject({ code: res.statusCode, message: res.data })
    }

  }).catch(error => {
    console.log(error)
    if (isShowLoading) {
      Taro.hideLoading()
    }
    let errCode = error.code
    let errMes = error.message && error.message.error ? error.message.error : '请求异常'
    Taro.showToast({
      title: errMes,
      icon: 'none',
      duration: 2000
    })
  })
}