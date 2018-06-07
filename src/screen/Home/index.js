import React, { Component } from 'react'

import {
  View,
  Text,
  Button
} from 'react-native'

export default class Home extends Component {
  render () {
    return (
      <View>
        <Text>首页</Text>
        <Button
          onPress={ () => alert('首页') }
          title="返回首页"
        ></Button>
      </View>
    )
  }
}