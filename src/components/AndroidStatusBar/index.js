import React, { Component } from 'react'
import { View, StatusBar, StyleSheet, Platform } from 'react-native'

const bool = Platform.OS==='android'

export default class AndroidStatusBar extends Component {
  render () {
    return (
      <View style={ styles.container }>
        { bool && 
          <StatusBar
            backgroundColor="rgba(0,0,0,0)"
            translucent={true}
            barStyle="light-content"
          /> 
        }
        
        { this.props.children }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: bool ? StatusBar.currentHeight : 0
  }
})
