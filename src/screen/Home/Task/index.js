import React, { Component } from 'react'

import {
  View,
  StyleSheet
} from 'react-native'

import { TeskItems } from 'components/index'
import { HomeSignTesk, HomeBindingTesk, HomeInvitationTesk } from 'images/index'

export default class Task extends Component {
  render () {
    return (
      <View style={ [ styles.container, this.props.style ] }>
        <TeskItems 
          style={ styles.taskList }
          source={ HomeSignTesk }
          title="每日签到"
          buttonText="+150算力"
          isDisabled={ true }
        ></TeskItems>
        <TeskItems 
          style={ styles.taskList }
          source={ HomeBindingTesk }
          title="WGS基因矿"
          buttonText="+150算力"
        ></TeskItems>
        <TeskItems 
          style={ styles.taskList }
          source={ HomeInvitationTesk }
          title="邀请好友"
          buttonText="+150算力"
        ></TeskItems>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  taskList: {
    alignItems: 'center'
  }
})