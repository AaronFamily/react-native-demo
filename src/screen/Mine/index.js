import React, { Component } from 'react'

import {
  SafeAreaView,
  StyleSheet
} from 'react-native'

import { HeaderRight } from 'components/index'

import Address from './Address/index'
import Information from './Information/index'
import Operation from './Operation/index'

export default class Mine extends Component {
  static navigationOptions = {
    headerRight: (
      <HeaderRight></HeaderRight>
    )
  }

  render () {
    return (
      <SafeAreaView style={ styles.content }>
        <Information navigation={this.props.navigation}></Information>
        <Address style={ styles.spacing } navigation={this.props.navigation}></Address>
        <Operation style={ styles.spacing } navigation={this.props.navigation}></Operation>
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