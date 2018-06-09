import React, { Component } from 'react'

import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native'

import Address from './Address/index'
import Information from './Information/index'
import Operation from './Operation/index'

export default class Mine extends Component {
  render () {
    return (
      <SafeAreaView style={ styles.content }>
        <Information></Information>
        <Address style={ styles.spacing }></Address>
        <Operation style={ styles.spacing }></Operation>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#F9FAFC'
  },
  spacing: {
    marginTop: 16
  }
})