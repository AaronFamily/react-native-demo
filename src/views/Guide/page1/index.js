import React, { Component } from 'react'

import { View, Text, Button, NetInfo } from "react-native";

export default class Page1 extends Component {
  render () {
    return (
      <View style={{ marginTop: 30 } }>
        <Text>目前是第一页</Text>
        <Button
          onPress={() => this.props.navigation.navigate('GuidePage2') }
          title="go page2"
        ></Button>
      </View>
    )
  }

  componentWillMount() {
    // NetInfo.isConnected.fetch().done((status) => {
    //   alert(status)
    // })

    

    NetInfo.addEventListener("connectionChange", (a) => {
      console.log(a)
    })
  }
}