import React, { Component } from 'react'
import {
  StyleSheet,
  StatusBar
} from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'

import { BackgroundPicture, AndroidStatusBar, StatusBarTheme } from 'components/index'

import Dig from './Dig/index'
import Task from './Task/index'

import { HomeBg } from 'images/index'

export default class Home extends Component {
  
  render () {
    return (
      <BackgroundPicture
        source={ HomeBg }
        style={ [styles.container, !this.bool? styles.iphonex: styles.android] }
      >
        <StatusBar 
          backgroundColor={'blue'}
          translucent={false}
        />
        <AndroidStatusBar>
          <Dig style={ styles.topContent }></Dig>
          <Task style={ styles.bottomContent }></Task>
        </AndroidStatusBar>
      </BackgroundPicture>
    )
  }
}

const styles = StyleSheet.create({
  iphonex: {
    ...ifIphoneX({
      paddingTop: 44
    },{
      paddingTop: 20
    })
  },
  android: {},
  container: {
    flex: 1,
  },
  topContent: {
    height: 346,
  },
  bottomContent: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingTop: 24
  }
})