import React, { Component } from 'react'

import {
  View,
  Text,
  Button
} from 'react-native'

export default class Mine extends Component {
  render () {
    return (
      <View>
        <Text>个人中心</Text>
        <Button
          onPress={ () => alert('个人中心') }
          title="返回首页"
        ></Button>
      </View>
    )
  }
}