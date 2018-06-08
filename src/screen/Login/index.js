import React, { Component } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native'

import { 
  AppropriateInput,
  BackgroundPicture,
  GradientButton
} from 'components/index.js'

import VerificationCode from './VerificationCode/index.js'
import Agreement from './Agreement/index.js'

export default class Login extends Component {
  constructor () {
    super()

    this.state = {
      phone: '',
      code: ''
    }
  }

  changePhone (phone) {
    this.setState({phone})
  }

  changeCode (code) {
    this.setState({code})
  }

  submitFunc () {
    this.props.navigation.navigate('Invitation')
  }

  render () {
    return (
      <BackgroundPicture style={ styles.backgroundBox }>
        <SafeAreaView style={ styles.container }>
          <View style={ styles.loginBox }>
            <Text style={ styles.title }>星球注册/登陆</Text>
            <View style={ styles.textInputBox}>
              <AppropriateInput
                style={styles.textInput}
                placeholder={'手机号'}
                keyboardType="numeric"
                maxLength={11}
                onChangeText={ this.changePhone.bind(this) }
                returnKeyType="next"
              />
            </View>
            <View style={ styles.textInputBox}>
              <AppropriateInput
                style={styles.textInput}
                placeholder={'验证码'}
                keyboardType="numeric"
                maxLength={6}
                onChangeText={ this.changeCode.bind(this) }
                returnKeyType="send"
              />
              <VerificationCode></VerificationCode>
            </View>
            <GradientButton
              title="进入星球"
              triggerClick={ this.submitFunc.bind(this) }
            ></GradientButton>
          </View>
          <Agreement style={ styles.agreement }></Agreement>
        </SafeAreaView>
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
    loginBox: {
      width: 320,
      height: 340,
      borderRadius: 18,
      paddingTop: 35,
      paddingLeft: 30,
      paddingRight: 39,
      backgroundColor: '#fff',
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
    agreement: {
      position: 'absolute',
      bottom: 32,
      left: 0,
      right: 0
    }
});