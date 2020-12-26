import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Camera, Picker } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import style from './index.module.scss'
import { connect } from 'react-redux'
import { add } from '../../actions/test'


class Index extends Component<any, any> {

  state = {
    test: {
      number: 100
    },
  }

  componentWillMount() { }

  componentDidMount() {

  }

  componentWillUnmount() { }

  componentDidShow() {
    Taro.onMemoryWarning(function (res) {
      console.log(res)
      console.log(333)
    })
  }

  componentDidHide() { }


  handleRouter() {
    Taro.navigateTo({
      url: '/pages/home/index'
    })
  }

  chooseImage() {
    Taro.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        console.log(res)
        Taro.onMemoryWarning(function () {
          console.log(111)
        })
      },
      fail: function (err) {
        console.log(err)
        Taro.onMemoryWarning(function () {
          console.log(222)
        })
      }
    })
  }


  render() {
    const { number, addNumber } = this.props
    return (
      <View>
        <AtButton type='primary'>点击</AtButton>
        <View className={style.test}>css modules</View>
        <Text>{this.state.test.number}</Text>
        <View>{number}</View>
        <AtButton type='secondary' onClick={() => { addNumber(10) }}>增加</AtButton>
        <AtButton type='secondary' onClick={this.handleRouter.bind(this)}>跳转</AtButton>
        <AtButton type='primary' onClick={this.chooseImage.bind(this)}>选择图片</AtButton>
      </View>
    )
  }
}

const stateToProps = (state) => {
  return {
    number: state.test.number
  }
}

const dispatchToProps = (dispatch) => {
  return {
    addNumber(value) {
      dispatch(add(value))
    }
  }
}

export default connect(stateToProps, dispatchToProps)(Index)