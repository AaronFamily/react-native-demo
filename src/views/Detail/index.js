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
        <Text>这是详情页面</Text>
        <Button
          title="返回首页"
        ></Button>
      </View>
    )
  }
}