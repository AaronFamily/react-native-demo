import React, { Component } from 'react'
import { YellowBox, PixelRatio, Dimensions, StyleSheet, View } from 'react-native'
import StyleSheet375 from 'react-native-program-stylesheet'

import RootNavigator from 'router/index'

YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
])

export default class Root extends Component {
  render = () => <RootNavigator></RootNavigator>
}
