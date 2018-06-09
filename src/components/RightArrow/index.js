import React, { Component } from 'react'
import {
  Image,
  StyleSheet
} from 'react-native'

import { Arrow } from 'images/index'

export default class RightArrow extends Component {
  render () {
    return (
      <Image
        style={ [styles.arrow, this.props.style] }
        source={ Arrow }
      />
    )
  }
}

const styles = StyleSheet.create({
  arrow: {
    width: 7,
    height: 13
  }
})