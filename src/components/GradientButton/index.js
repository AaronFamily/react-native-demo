import React, { Component } from 'react'
import { 
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import PropTypes from 'prop-types'

import { ButtonBg } from 'images/index.js'

export default class GradientButton extends Component {
  static defaultProps = {
    title: 'Button',
    source: ButtonBg,
    activeOpacity: .6,
    resizeMode: 'cover',
    triggerClick: () => {}
  }

  static propTypes = {
    style: View.propTypes.style,
    textStyle: Text.propTypes.style,
    title: PropTypes.string,
    source: Image.propTypes.source,
    activeOpacity: PropTypes.number,
    resizeMode: PropTypes.string,
    triggerClick: PropTypes.func
  }

  render () {
    return (
      <ImageBackground
        style={[styles.backgroundImage, this.props.style]}
        source={ this.props.source }
        resizeMode={ this.props.resizeMode }
      >
        <TouchableOpacity
          onPress={ (e) => this.props.triggerClick(e) }
          style={ styles.button }
          activeOpacity={ this.props.activeOpacity }
        >
          <Text style={ [styles.buttonText, this.props.textStyle] }>
            { this.props.title }
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: 57
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 15,
    color: '#FFFFFF',
    fontWeight: '500'
  }
})