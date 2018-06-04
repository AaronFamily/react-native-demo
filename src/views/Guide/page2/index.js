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
          title="go home"
        ></Button>
      </View>
    )
  }
}