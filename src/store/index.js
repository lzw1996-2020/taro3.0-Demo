/*
 * @Description: 
 * @Version: 
 * @Autor: Liang Zhong Wei
 * @Date: 2020-12-08 13:58:29
 * @LastEditors: Liang Zhong Wei
 * @LastEditTime: 2020-12-08 14:09:08
 */
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'//中间件
import reducer from '../reducers/index'//数据来源

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const middlewares = [
  thunk
]

if (process.env.NODE_ENV === 'development' && process.env.TARO_ENV !== 'quickapp') {
  middlewares.push(require('redux-logger').createLogger())
}

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
  // other store enhancers if any
)

const store = createStore(reducer,enhancer)//创建数据存储仓库
export default store//暴露出去