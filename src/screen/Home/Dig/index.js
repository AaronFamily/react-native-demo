import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'

import { AndroidStatusBar } from 'components/index'
import { HomeToken, HomeCalculate } from 'images/index'

export default class Dig extends Component {
  
  render () {
    return (
      <View style={ [styles.container, this.props.style] }>
        <AndroidStatusBar>
          <Text style={ styles.title }>达尔文星球</Text>
          <View style={ styles.content }>
            <Text>内容区</Text>
          </View>
          <View style={ styles.footer }>
            <View style={ styles.amountBox }>
              <Image
                style={ styles.icon }
                source={ HomeToken }
              ></Image>
              <Text style={ styles.amountText }>50000</Text>
            </View>
            <View style={ [styles.amountBox, styles.amountRight] }>
              <Image
                style={ styles.icon }
                source={ HomeCalculate }
              ></Image>
              <Text style={ styles.amountText }>300</Text>
            </View>
          </View>
        </AndroidStatusBar>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10
  },
  title: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center'
  },
  content: {
    height: 256,
    // backgroundColor: 'rgba(0,0,0,0.6)',
    marginTop: 10
  },
  footer: {
    flexDirection: 'row',
    paddingLeft: 19,
    paddingRight: 18,
    paddingBottom: 20,
    paddingTop: 10
  },
  amountBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  amountRight: {
    justifyContent: 'flex-end'
  },
  icon: {
    width: 30,
    height: 30
  },
  amountText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 9
  }
})