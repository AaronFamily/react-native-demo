import React, { Component } from 'react'
import { View, ImageBackground, Image, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { LoginBg } from 'images/index.js'

export default class BackgroundPicture extends Component {
  static defaultProps = {
    source: LoginBg,
    resizeMode: 'cover'
  }

  static propTypes = {
    style: View.propTypes.style,
    source: Image.propTypes.source,
    resizeMode: PropTypes.string,
  }

  render () {
    return (
      <ImageBackground
        style={ this.props.style }
        source={ this.props.source }
        resizeMode={ this.props.resizeMode }
      >
        { this.props.children }
      </ImageBackground>
    )
  }
}