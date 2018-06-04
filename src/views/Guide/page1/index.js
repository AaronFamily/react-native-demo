import React, { Component } from 'react'

import {
  View,
  Text,
  Button
} from 'react-native'

export default class Page1 extends Component {
  render () {
    return (
      <View>
        <Text>目前是第一页</Text>
        <Button
          onPress={ () => alert('启动页第一页') }
          title="go page2"
        ></Button>
      </View>
    )
  }
}