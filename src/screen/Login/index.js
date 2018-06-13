import React, { Component } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView
} from 'react-native'

import {
  AndroidStatusBar,
  AppropriateInput,
  BackgroundPicture,
  GradientButton,
  TextButton,
  Statement
} from 'components/index.js'

export default class Login extends Component {
  constructor () {
    super()

    this.state = {
      username: '',
      password: ''
    }
  }

  changePhone (username) {
    this.setState({username})
  }

  changeCode (password) {
    this.setState({password})
  }

  submitFunc () {
    this.props.navigation.navigate('Invitation')
  }

  notice () {
    alert("由于APP账户功能的升级，2018年6月30号前用手机号在HGBC网页端注册的用户请在APP上重新注册。请注意，在绑定手机号环节，需要使用原注册手机号完成绑定。这样注册完成后，原手机号账户下所有信息均会同步到新账户内。为了表示歉意，每位重新注册的用户额外赠送50 HGBC 健康积分。")
  }

  render () {
    return (
      <BackgroundPicture style={ styles.backgroundBox }>
        <AndroidStatusBar>
          <SafeAreaView style={ styles.container }>
            <KeyboardAvoidingView style={ styles.content }>
              <View style={ styles.loginBox }>
                <Text style={ styles.title }>
                  登陆星球
                </Text>

                <View style={ styles.textInputBox}>
                  <AppropriateInput
                    style={styles.textInput}
                    placeholder={'用户名'}
                    onChangeText={ this.changePhone.bind(this) }
                    returnKeyType="next"
                    maxLength={ 30 }
                  />
                </View>

                <View style={ styles.textInputBox}>
                  <AppropriateInput
                    style={styles.textInput}
                    placeholder={'密码'}
                    secureTextEntry={true}
                    onChangeText={ this.changeCode.bind(this) }
                    returnKeyType="send"
                  />
                </View>

                <TextButton
                  style={ styles.forgotPasswordBox }
                  textStyle={ styles.forgotPasswordText }
                  location="right"
                >
                  忘记帐号或密码？
                </TextButton>

                <GradientButton
                  title="进入星球"
                  triggerClick={ this.submitFunc.bind(this) }
                />

              </View>
              <View style={ styles.registeredBox }>
                <Text style={ styles.doubt }>
                  还没有星球身份？
                </Text>

                <TextButton
                  style={ styles.textButtonBox }
                  textStyle={ styles.textButton }
                  location="left"
                  triggerClick={ () => this.props.navigation.navigate('Registered') }
                >
                  立即注册
                </TextButton>

              </View>
            </KeyboardAvoidingView>
            <Statement 
              style={ styles.agreement }
              triggerClick={ this.notice.bind(this) }
            >
              6-30前注册用户须知
            </Statement>
          </SafeAreaView>
        </AndroidStatusBar>
      </BackgroundPicture>
    )
  }
}

const styles = StyleSheet.create({
    backgroundBox: {
      flex: 1
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    content: {
      height: 414
    },
    loginBox: {
      width: 320,
      height: 340,
      borderRadius: 18,
      paddingTop: 35,
      paddingLeft: 30,
      paddingRight: 39,
      backgroundColor: '#fff'
    },
    title: {
      textAlign: 'center',
      fontSize: 22,
      fontWeight: '500',
      color: '#333'
    },
    textInputBox: {
      flexDirection: 'row',
      height: 65,
      borderBottomWidth: .5,
      borderBottomColor:'#DADBDC',
      alignItems: 'flex-end'
    },
    textInput: {
      flex:1,
    },
    button: {
      height: 44,
      marginTop: 40,
      backgroundColor: 'red',
      borderRadius: 44,
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonText: {
      fontSize: 15,
      color: '#FFFFFF'
    },
    forgotPasswordBox: {
      marginTop: 18,
      marginBottom: 22
    },
    forgotPasswordText: {
      color: '#667AF5'
    },
    registeredBox: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 42
    },
    doubt: {
      fontSize: 14,
      color: '#fff'
    },
    textButtonBox: {
      width: 66,
      height: 30
    },
    textButton: {
      fontSize: 16,
      color: '#fff'
    },
    agreement: {
      position: 'absolute',
      bottom: 32,
      left: 0,
      right: 0
    }
});