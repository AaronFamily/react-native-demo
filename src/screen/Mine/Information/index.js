import React, { Component } from 'react'

import {
  SafeAreaView,
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native'

import { defaultPhoto, Money, Wallet, TopUp } from 'images/index'
import Column from './Column/index'

export default class Mine extends Component {
  render () {
    return (
      <View style={ styles.container }>
        <View style={ styles.headPortraitBox }>
          <View style={ styles.photoBox }>
            <Image
              style={ styles.photo }
              source={ defaultPhoto }
              resizeMode="cover"
            ></Image>
          </View>
          <View style={ styles.userInfo }>
            <Text style={ styles.usernameText }>H0043003</Text>
            <Text style={ styles.userType }>创世居民</Text>
          </View>
        </View>
        <View style={ styles.infoShowBox }>
          <Column
            text="34343"
            isDisable={ false }
            disabledSource={ Money }
            disabledTextColor="#40B1FF"
          ></Column>
          <Column
            text="提现"
            isDisable={ true }
            disabledSource={ Wallet }
            canSource={ Wallet }
            disabledTextColor="#AAB4BD"
            canTextColor="#333"
          ></Column>
          <Column
            text="充值"
            isDisable={ false }
            disabledSource={ TopUp }
            canSource={ TopUp }
            disabledTextColor="#AAB4BD"
            canTextColor="#333"
          ></Column>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 213,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 18
  },
  headPortraitBox: {
    flexDirection: 'row',
  },
  photoBox: {
    width: 100,
    height: 100,
    borderRadius: 100,
    overflow: 'hidden'
  },
  photo: {
    width: 100,
    height: 100
  },
  userInfo: {
    marginTop: 16,
    marginLeft: 16
  },
  usernameText: {
    color: '#222',
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 8
  },
  userType: {
    color: '#333',
    fontSize: 19,
    fontWeight: '600'
  },
  infoShowBox: {
    flexDirection: 'row',
    marginTop: 38,
  }
})