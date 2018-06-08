import React, { Component } from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'

import { BackgroundPicture } from 'components/index.js'

export default class Banner extends Component {
  render () {
    return (
      <BackgroundPicture style={ styles.backgroundBox }>
        <SafeAreaView style={ styles.container }>
          <Text style={ styles.title }>填写邀请码，+5算力奖励</Text>
          <Text style={ styles.text }>算力越高，奖励的 HGBC 健康积分越多</Text>
        </SafeAreaView>
      </BackgroundPicture>
    )
  }
}

const styles = StyleSheet.create({
  backgroundBox: {
    height: 220,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    color:'#fff',
    marginBottom: 9,
    fontWeight: '600'
  },
  text: {
    fontSize: 15,
    color:'#fff'
  }
})