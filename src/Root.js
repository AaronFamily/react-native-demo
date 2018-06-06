import React, { Component } from 'react'
import { YellowBox } from 'react-native'

import RootNavigator from './router'

YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

export default class Root extends Component {
  render = () => <RootNavigator></RootNavigator>
}