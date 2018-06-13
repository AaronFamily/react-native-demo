import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import PropTypes from 'prop-types'

export default class TextButton extends Component {
  static defaultProps = {
    location: 'left',
    triggerClick: () => {}
  }

  static propTypes = {
    style: View.propTypes.style,
    location: PropTypes.string,
    triggerClick: PropTypes.func
  }

  _textAlign () {
    const type = this.props.location

    if (type === 'right') {
      return styles.rightText
    } else if(type === 'center') {
      return styles.centerText
    } else {
      return styles.leftText
    }
  }

  render () {
    return (
      <View style={ [
        styles.textButtonBox,
        this.props.style
      ] }>
        <TouchableOpacity 
          style={ [
            styles.touchableBox,
            this._textAlign()
          ] }
          activeOpacity={ .8 }
          onPress={ (e) => this.props.triggerClick(e) }
        >
          <Text style={ [
            styles.forgotPassword,
            this.props.textStyle
          ] }>{ this.props.children }</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textButtonBox: {
    position: 'relative',
    height: 24
  },
  touchableBox: {
    position: 'absolute',
    top: 0
  },
  leftText: {
    left: 0
  },
  centerText: {
    left: 0,
    right: 0,
    alignItems: 'center'
  },
  rightText: {
    right: 0
  },
  textColor: {
    color: '#333'
  }
})
