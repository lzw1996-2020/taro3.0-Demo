/*
 * @Description: 
 * @Version: 
 * @Autor: Liang Zhong Wei
 * @Date: 2020-12-08 10:18:16
 * @LastEditors: Liang Zhong Wei
 * @LastEditTime: 2020-12-08 14:03:32
 */
import React, { Component } from 'react'
import './app.scss'
import 'taro-ui/dist/style/index.scss'
import { Provider } from 'react-redux'

import store from './store'


class App extends Component {

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // this.props.children 是将要会渲染的页面
  render() {
    return <Provider store={store}>
      {this.props.children}
    </Provider>

  }
}

export default App
