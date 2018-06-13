import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

export default class Statement extends Component {
  static defaultProps = {
    triggerClick: () => {}
  }

  static propTypes = {
    style: View.propTypes.style,
    triggerClick: PropTypes.func
  }

  render () {
    return (
      <TouchableOpacity
        onPress={ this.props.triggerClick }
        style={ this.props.style }
        activeOpacity={ .9 }
      >
        <Text 
          style={ [styles.agreement, this.props.agreementStyles] }
        >
          { this.props.children }
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  agreement: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center'
  }
})