import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import { Message } from 'images/index'

export default class NavigationHeaderRight extends Component {
  static defaultProps = {
    source: Message,
    resizeMode: 'cover'
  }

  static propTypes = {
    style: View.propTypes.style,
    source: Image.propTypes.source,
    resizeMode: PropTypes.string,
  }

  render () {
    return (
      <Image
        style={ [styles.headerRight, this.props.style] }
        source={ this.props.source }
        resizeMode={ this.props.resizeMode }
      />
    )
  }
}

const styles = StyleSheet.create({
  headerRight: {
    width: 22,
    height: 21,
    marginRight: 25
  }
})