import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import Operation from './Operation/index'
import Rules from './Rules/index'

export default class Registered extends Component {
  render () {
    return (
      <View style={ styles.container }>
        <Operation></Operation>
        <Rules></Rules>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})