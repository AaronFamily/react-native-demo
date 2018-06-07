import React, { Component } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableHighlight
} from 'react-native'

export default class Login extends Component {
  constructor () {
    super()

    this.state = {
      phone: '',
      code: '',
      countdown: '获取验证码',
      isObtain: false
    }

    this.timer = null

    this.changePhone.bind(this)
    this.changeCode.bind(this)
    this.fireVerification.bind(this)
  }

  changePhone (phone) {
    this.setState({phone})
    console.log(phone)
  }

  changeCode (code) {
    this.setState({code})
  }

  fireVerification () {
    let count = 60
    let countdown = ''
    let isObtain = false

    if(this.timer) return

    this.timer = setInterval(() => {
      count--
      
      let countdown = `${count}s 后重新获取`
      let isObtain = true
      if(count <= 0) {
        clearInterval(this.timer)
        count = 60
        countdown = `获取验证码`
        isObtain = true
        this.timer = null
      }

      this.setState({countdown, isObtain})
    }, 1000)
  }

  render () {
    return (
      <View style={ styles.container }>
        <View style={ styles.loginBox }>
          <Text style={ styles.title }>星球注册/登陆</Text>
            <View style={ styles.textInputBox}>
              <TextInput
                style={styles.textInput}
                autoCorrect={ false }
                keyboardType="numeric"
                maxLength={11}
                onChangeText={ (value) => this.changePhone(value) }
                placeholder={'手机号'}
                placeholderTextColor="#9B9B9B"
                returnKeyType="next"
                returnKeyLabel="next"
                clearButtonMode="while-editing"
                underlineColorAndroid="transparent"
              />
            </View>
            <View style={ styles.textInputBox}>
              <TextInput
                style={styles.textInput}
                placeholder={'验证码'}
                autoCorrect={ false }
                keyboardType="numeric"
                maxLength={6}
                onChangeText={ (value) => this.changeCode(value) }
                placeholderTextColor="#9B9B9B"
                returnKeyType="send"
                returnKeyLabel="send"
                clearButtonMode="while-editing"
                underlineColorAndroid="transparent"
              />
              <Text
                style={ styles.verification }
                onPress={ () => this.fireVerification() }
              >{this.state.countdown}</Text>
            </View>
            <TouchableHighlight
              style={ styles.button }
              activeOpacity={0.5}
            >
              <Text style={ styles.buttonText }>进入星球</Text>
            </TouchableHighlight>
        </View>
        <Text style={ styles.agreement }>注册/登录代表同意《用户协议》和《隐私协议》</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center'
    },
    loginBox: {
      width: 640,
      height: 680,
      borderRadius: 36,
      paddingTop: 70,
      paddingLeft: 60,
      paddingRight: 60,
      backgroundColor: '#fff',
    },
    title: {
      textAlign: 'center',
      fontSize: 44,
      fontWeight: '500',
      color: '#333'
    },
    textInputBox: {
      flexDirection: 'row',
      height: 130,
      borderBottomWidth: 1,
      borderBottomColor:'#DADBDC',
      alignItems: 'flex-end'
    },
    textInput: {
      flex:1,
      fontSize: 32,
      height: 84,
      fontSize: 30
    },
    verification: {
      marginLeft: 24,
      height: 84,
      fontSize: 30,
      color:'#40B1FF',
      lineHeight: 84,
    },
    button: {
      height: 88,
      marginTop: 80,
      backgroundColor: 'red',
      borderRadius: 88,
      alignItems: 'center',
      justifyContent: 'center',
      // shadowColor: '',
      // shadowOffset: '',
      // shadowOpacity: '',
      // shadowRadius: ''
    },
    buttonText: {
      fontSize: 30,
      color: '#FFFFFF'
    },
    agreement: {
      position: 'absolute',
      fontSize: 24,
      color: '#fff',
      bottom: 64,
      left: 0,
      right: 0,
      textAlign: 'center'
    }
});