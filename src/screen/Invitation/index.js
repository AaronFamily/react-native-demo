import React, { Component } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native'

import { AppropriateInput, GradientButton } from 'components/index.js'
import Banner from './Banner/index.js'

export default class Invitation extends Component {
  changeInvite () {

  }

  changeNickname () {

  }

  submitFunc () {

  }

  render () {
    return (
      <View>
        <Banner></Banner>
        <View style={ styles.container }>
          <View style={ styles.textInputBox}>
            <AppropriateInput
              style={styles.textInput}
              placeholder={'填写星球邀请码'}
              keyboardType="numeric"
              maxLength={11}
              onChangeText={ this.changeInvite.bind(this) }
              returnKeyType="next"
            />
          </View>
          <View style={ styles.textInputBox}>
            <AppropriateInput
              style={styles.textInput}
              placeholder={'设置昵称'}
              keyboardType="numeric"
              maxLength={11}
              onChangeText={ this.changeNickname.bind(this) }
              returnKeyType="next"
            />
          </View>
          <GradientButton
            title="完成"
            triggerClick={ this.submitFunc.bind(this) }
          ></GradientButton>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 31,
    paddingRight: 30
  },
  textInputBox: {

  },
  textInput: {

  }
})