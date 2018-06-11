import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import { JumpList } from 'components/index'

export default class Settings extends Component {
  render () {
    return (
      <View style={ styles.container }>
        <View style={ styles.jumpListBox }>
          <JumpList 
            style={ styles.content }
            title="当前帐号"
            isArrow={ false }
          >
            <Text style={ styles.rightText }>186****4585</Text>
          </JumpList>
          <JumpList 
            style={ styles.content }
            title="星球数字身份ID"
            isArrow={ false }
          >
            <Text style={ styles.rightText }>H00044545</Text>
          </JumpList>
          <JumpList 
            style={ styles.content }
            title="版本"
            isArrow={ false }
          >
            <Text style={ styles.rightText }>0.1.2_beta</Text>
          </JumpList>
          <JumpList 
            title="重置交易密码"
          />
          <JumpList 
            title="认识星球"
          />
        </View>
        <View style={ styles.jumpListBox }>
          <JumpList 
            title="退出登录"
            isArrow={ false }
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFC'
  },
  content: {
    flexDirection: 'row'
  },
  jumpListBox: {
    backgroundColor: '#fff',
    paddingLeft: 25,
    marginTop: 10
  },
  rightText: {
    flex: 1,
    lineHeight: 44,
    textAlign: 'right',
    paddingRight: 25
  }
})