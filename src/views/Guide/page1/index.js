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
          title="go page2"
        ></Button>
      </View>
    )
  }
}