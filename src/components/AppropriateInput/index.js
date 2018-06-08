import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

export default class AppropriateInput extends Component {
  static defaultProps = {
    style: {},
    autoCorrect: false,
    editable: true,
    keyboardType: 'default',
    multiline: false,
    maxLength: 11,
    placeholder: '',
    placeholderTextColor: '#9B9B9B',
    returnKeyType: 'next',
    clearButtonMode: 'while-editing',
    onChangeText: () => {}
  }

  static propTypes = {
    style: View.propTypes.style,
    autoCorrect: PropTypes.bool,
    editable: PropTypes.bool,
    multiline: PropTypes.bool,
    keyboardType: PropTypes.string,
    maxLength: PropTypes.number,
    placeholder: PropTypes.string,
    placeholderTextColor: PropTypes.string,
    returnKeyType: PropTypes.string,
    clearButtonMode: PropTypes.string,
    onChangeText: PropTypes.func
  }

  render () {
    return (
      <TextInput
        style={[styles.textInput, this.props.style]}
        autoCorrect={this.props.autoCorrect}
        keyboardType={this.props.keyboardType}
        editable={this.props.editable}
        multiline={this.props.multiline}
        maxLength={this.props.maxLength}
        onChangeText={ (value) => this.props.onChangeText(value) }
        placeholder={this.props.placeholder}
        placeholderTextColor={this.props.placeholderTextColor}
        returnKeyType={this.props.returnKeyType}
        returnKeyLabel={this.props.returnKeyType}
        clearButtonMode={this.props.clearButtonMode}
        underlineColorAndroid="transparent"
      />
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 42,
    fontSize: 15
  }
})