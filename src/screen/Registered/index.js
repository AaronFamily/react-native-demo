import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import { 
  AppropriateInput,
  GradientButton,
  TextButton,
  Statement,
  TopBanner
} from 'components/index.js'

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
          <Text style={ styles.plate }>注册</Text>
          <Text style={ styles.title }>首次注册，+18个HGBC健康积分</Text>
          <Text style={ styles.text }>算力越高，奖励的 HGBC 健康积分越多</Text>
        </TopBanner>
        <View style={ styles.container }>
          <View style={ styles.textInputBox}>
            <AppropriateInput
              style={styles.textInput}
              placeholder={'用户名'}
              keyboardType="numeric"
              maxLength={30}
              onChangeText={ this.changeInvite.bind(this) }
              returnKeyType="next"
            />
          </View>
          <View style={ styles.textInputBox}>
            <AppropriateInput
              style={styles.textInput}
              placeholder={'密码'}
              keyboardType="numeric"
              maxLength={18}
              onChangeText={ this.changeNickname.bind(this) }
              returnKeyType="next"
            />
          </View>
          <View style={ styles.textInputBox}>
            <AppropriateInput
              style={styles.textInput}
              placeholder={'确认密码'}
              keyboardType="numeric"
              maxLength={18}
              onChangeText={ this.changeNickname.bind(this) }
              returnKeyType="next"
            />
          </View>
          <GradientButton
            style={ styles.next }
            title="下一步"
            triggerClick={ () => this.props.navigation.navigate('Verification') }
          ></GradientButton>
          <TextButton
            style={ styles.textButtonBox }
            location="center"
            textStyle={ styles.loginColor }
            triggerClick={ () => this.props.navigation.navigate('Login') }
          >已有帐号去登录</TextButton>
        </View>
        <Statement
            style={ styles.agreement }
            triggerClick={ () => {}}
            agreementStyles={ styles.agreementText }
          >注册/登录代表同意《用户协议》和《隐私协议》</Statement>
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