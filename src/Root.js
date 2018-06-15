import React, { Component } from 'react'
import { YellowBox } from 'react-native'
import { Provider } from 'react-redux'

import 'react-native-program-stylesheet'

import store from 'store/index'

import RootNavigator from 'router/index'

YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
])

export default class Root extends Component {
  render = () => <Provider store={ store } ><RootNavigator></RootNavigator></Provider>
}
