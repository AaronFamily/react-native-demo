import React, { Component } from 'react'

import { SafeAreaView, StyleSheet, StatusBar, Platform } from 'react-native'

import { HeaderRight, StatusBarTheme } from 'components/index'

import Address from './Address/index'
import Information from './Information/index'
import Operation from './Operation/index'

export default class Mine extends Component {
  static navigationOptions = {
    headerRight: (
      <HeaderRight></HeaderRight>
    )
  }

  constructor () {
    super()
    this.bool = Platform.OS === 'android'
  }

  componentDidMount () {
    StatusBar.setBarStyle('light-content')
    this.bool && StatusBar.setBackgroundColor('#1a0c2f')
  }

  componentWillUnmount () {
    this._navListener.remove();
  }

  render () {
    return (
      <SafeAreaView style={ styles.content }>
        <StatusBarTheme />
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