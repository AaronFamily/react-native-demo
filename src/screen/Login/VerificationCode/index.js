import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'

export default class VerificationCode extends Component {
  constructor () {
    super()

    this.state = {
      countdown: '获取验证码',
      isDisabled: false
    }
    this.timer = null
  }

  fireVerification () {
    let count = 60
    let countdown = ''
    let isDisabled = false

    if(this.timer) return

    this.timer = setInterval(() => {
      count--
      
      countdown = `${count}s 后重新获取`
      isDisabled = true

      if(count <= 0) {
        clearInterval(this.timer)
        count = 60
        countdown = `获取验证码`
        isDisabled = false
        this.timer = null
      }

      this.setState({countdown, isDisabled})
    }, 1000)
  }

  render () {
    return (
      <Text
        style={ [styles.verification, this.state.isDisabled ? styles.disabled : null] }
        onPress={ () => this.fireVerification() }
      >
        { this.state.countdown }
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  verification: {
    marginLeft: 12,
    height: 42,
    fontSize: 15,
    color:'#40B1FF',
    lineHeight: 42,
  },
  
  disabled: {
    color:'#999'
  }
})
