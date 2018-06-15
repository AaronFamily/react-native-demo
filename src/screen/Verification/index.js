import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import { 
  AppropriateInput,
  GradientButton,
  TopBanner
} from 'components/index.js'

import VerificationCode from './VerificationCode/index'

export default class Invitation extends Component {
  changeInvite () {

  }

  changeNickname () {

  }

  submitFunc () {

  }

  render () {
    return (
      <View style={ styles.content }>
        <TopBanner>
          <Text style={ styles.plate }>绑定手机号</Text>
          <Text style={ styles.title }>填写邀请码，+5算力奖励</Text>
          <Text style={ styles.text }>算力越高，奖励的 HGBC 健康积分越多</Text>
        </TopBanner>
        <View style={ styles.container }>
          <View style={ styles.textInputBox}>
            <AppropriateInput
              style={styles.textInput}
              placeholder={'手机号'}
              keyboardType="numeric"
              maxLength={30}
              onChangeText={ this.changeInvite.bind(this) }
              returnKeyType="next"
            />
          </View>
          <View style={ styles.textInputBox}>
            <AppropriateInput
              style={styles.textInput}
              placeholder={'验证码'}
              keyboardType="numeric"
              maxLength={18}
              onChangeText={ this.changeNickname.bind(this) }
              returnKeyType="next"
            />
            <VerificationCode></VerificationCode>
          </View>
          <View style={ styles.textInputBox}>
            <AppropriateInput
              style={styles.textInput}
              placeholder={'邀请码（选填）'}
              keyboardType="numeric"
              maxLength={18}
              onChangeText={ this.changeNickname.bind(this) }
              returnKeyType="next"
            />
          </View>
          <GradientButton
            style={ styles.next }
            title="完成"
            triggerClick={ () => this.props.navigation.navigate('Main') }
          ></GradientButton>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  container: {
    paddingLeft: 31,
    paddingRight: 30,
    backgroundColor: '#fff'
  },
  textInputBox: {
    flexDirection: 'row',
    height: 65,
    borderBottomWidth: .5,
    borderBottomColor:'#DADBDC',
    alignItems: 'flex-end'
  },
  textInput: {
    flex:1
  },
  next: {
    marginTop: 36,
    marginBottom: 30,
    height: 66
  },
  textButtonBox: {
    
  },
  agreement: {
    position: 'absolute',
    bottom: 32,
    left: 0,
    right: 0
  },
  agreementText: {
    color: '#8D8C8C'
  },
  loginColor: {
    color: '#525252',
    fontSize: 17
  },
  plate: {
    fontSize: 26,
    color: '#fff',
    marginBottom: 28
  },
  title: {
    fontSize: 22,
    color:'#fff',
    marginBottom: 9,
    fontWeight: '600'
  },
  text: {
    fontSize: 15,
    color:'#fff'
  }
})