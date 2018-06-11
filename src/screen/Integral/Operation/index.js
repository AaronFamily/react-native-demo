import React, { Component } from 'react'
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import { BackgroundPicture } from 'components/index'

import { OperationBg, OperationDetail, OperationWallet } from 'images/index'

export default class Operation extends Component {
  render () {
    return (
      <View style={ styles.container }>
        <BackgroundPicture
          style={ styles.backgroundBox}
          source={ OperationBg }
        >
          <TouchableOpacity
            onPress={ () => alert(1) }
            style={ styles.button }
            activeOpacity={ .9 }
          >
            <Image 
              style={ styles.detailImage }
              source={ OperationDetail }
            />
            <Text style={ styles.buttonText }>
              收入明细
            </Text>
          </TouchableOpacity>
          <View style={ styles.assetsBox }>
            <Text style={ styles.assetsTitle }>总数字资产</Text>
            <View  style={ styles.assetsNumberBox }>
              <Text style={ styles.assetsNumber }>60000.99</Text>
              <Text style={ styles.assetsHgbc }>HGBC</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={ () => alert(1) }
            style={ styles.buttonBottom }
            activeOpacity={ .9 }
          >
            <Image
              style={ styles.walletImage }
              source={ OperationWallet }
            />
            <Text style={ [styles.buttonText, styles.buttonTextBottom] }>提现到钱包</Text>
          </TouchableOpacity>
        </BackgroundPicture>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 218,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundBox: {
    width: 343,
    height: 218,
    paddingTop: 32,
    paddingLeft: 38,
    paddingRight: 38
  },
  button: {
    width: 80,
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 15,
    color: '#fff',
    marginLeft: 4
  },
  detailImage: {
    width: 14,
    height: 15
  },
  assetsBox: {
    marginTop: 20
  },
  assetsTitle: {
    fontSize: 17,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center'
  },
  assetsNumberBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8
  },
  assetsNumber: {
    fontSize: 24,
    color: '#fff'
  },
  assetsHgbc: {
    fontSize: 21,
    color: '#fff',
    marginLeft: 8
  },
  buttonBottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35
  },
  buttonTextBottom: {
    fontSize: 16
  },
  walletImage: {
    width: 15,
    height: 14
  }
})