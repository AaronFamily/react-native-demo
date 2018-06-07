import React, { Component } from 'react'
import { YellowBox, PixelRatio, Dimensions, StyleSheet, View } from 'react-native'

import RootNavigator from 'router/index'

YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

const dp2px = dp => PixelRatio.getPixelSizeForLayoutSize(dp)
const px2dp = px => PixelRatio.roundToNearestPixel(px)

let designSize = {width:750,height:1336}

let pxRatio = PixelRatio.get()
let {width,height} = Dimensions.get("window")

let dpWidth = dp2px(width)
let dpHeight = dp2px(height)

let design_scale = designSize.width/dpWidth

dpHeight = dpHeight*design_scale
dpWidth = dpWidth*design_scale

let scale = 1/pxRatio/design_scale

export default class Root extends Component {
  render () {
    return (
      <View style={ styles.container }>
        <RootNavigator></RootNavigator>
      </View>
    )
  }
}

console.log(dpWidth)

const styles = StyleSheet.create({
  container: {
    width: dpWidth,
    height: dpHeight,
    transform:[
      {translateX: -dpWidth*.5},
      {translateY: -dpHeight*.5},
      {scale: scale},
      {translateX: dpWidth*.5},
      {translateY: dpHeight*.48}
    ]
  }
})