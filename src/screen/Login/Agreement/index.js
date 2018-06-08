import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Agreement extends Component {
  static defaultProps = {
    style: {}
  }

  static propTypes = {
    style: View.propTypes.style
  }

  render () {
    return (
      <Text style={ [styles.agreement, this.props.style] }>
        注册/登录代表同意《用户协议》和《隐私协议》
      </Text>
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