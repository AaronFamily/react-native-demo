import React, { Component } from 'react'

import {
  View,
  StyleSheet
} from 'react-native'

import { JumpList } from 'components/index'

export default class Mine extends Component {
  static propTypes = {
    style: View.propTypes.style
  }

  render () {
    return (
      <View style={ [styles.container, this.props.style] }>
        <JumpList 
          title="数据资产"
        />
        <JumpList 
          title="问题反馈"
        />
        <JumpList 
          title="加入社区"
        />
        <JumpList 
          title="账户设置"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingLeft: 25
  }
})