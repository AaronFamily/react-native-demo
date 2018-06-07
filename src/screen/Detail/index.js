import React, { Component } from "react";

import {
  View,
  Text,
  Button
} from 'react-native'

export default class Detail extends Component{
  render() {
    return <View>
        <Text>这是详情页面</Text>
        <Button onPress={() => alert("详情页")} title="返回首页" />
      </View>;
  }
}