import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class Rules extends Component {
  render () {
    return (
      <View style={ styles.container }>
        <Text style={ styles.instructions }>健康积分（通证）规则</Text>
        <Text style={ styles.content }>1、首年全网每24h奖励1013698个健康积分，逐年衰减30%</Text>
        <Text style={ styles.content }>2、公测期间，每日可提现上线是2000健康积分，单次提现最低200积分</Text>
        <Text style={ styles.content }>4、超过72小时不领取健康积分，算力会被冻结，挖矿停止</Text>
        <Text style={ styles.content }>5、提现之前，请先准备好链克钱包</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 29,
    paddingRight: 23,
    marginTop: 32
  },
  instructions: {
    fontSize: 20,
    color: '#333',
    marginBottom: 18
  },
  content: {
    fontSize: 14,
    color: '#505860',
    lineHeight: 24,
    marginTop: 17
  }
})