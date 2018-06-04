import React, { Component } from 'react'

import {
  View,
  Text,
  Button
} from 'react-native'

export default class Page2 extends Component {
  render () {
    return (
      <View>
        <Text>目前是第二页</Text>
        <Button
          onPress={ () => alert('启动页第二页') }
          title="go home"
        ></Button>
      </View>
    )
  }
}