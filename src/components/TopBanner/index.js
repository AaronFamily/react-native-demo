import React, { Component } from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'

import { BackgroundPicture, AndroidStatusBar } from 'components/index.js'

export default class TopBanner extends Component {
  render () {
    return (
      <BackgroundPicture style={ styles.backgroundBox }>
        <AndroidStatusBar>
          <SafeAreaView style={ styles.container }>
            { this.props.children }
          </SafeAreaView>
        </AndroidStatusBar>
      </BackgroundPicture>
    )
  }
}

const styles = StyleSheet.create({
  backgroundBox: {
    height: 220
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})