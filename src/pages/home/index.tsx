import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { connect } from 'react-redux'

class Home extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { number } = this.props
    return (
      <View className='home'>
        <Text>{number}</Text>
      </View>
    )
  }
}

const stateToProps = (state) => {
  return {
    number: state.test.number
  }
}

export default connect(stateToProps, null)(Home)