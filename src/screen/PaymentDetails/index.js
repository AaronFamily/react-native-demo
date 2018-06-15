import React, { Component } from 'react'

import {
  View,
  ListView,
  StyleSheet
} from 'react-native'

import { RenderRow } from 'components/index'

export default class Mine extends Component {
  constructor (props) {
    super(props)

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows([
        {
          time: '2018-06-05',
          type: '领取奖励',
          reward: '+21',
          address: ''
        },
        {
          time: '2018-06-05',
          type: '空投奖励',
          reward: '+10',
          address: ''
        },
        {
          time: '2018-06-05',
          type: '提现',
          reward: '-1000',
          address: '0x4e24c689f8c9e6d4a26c6f0edf1b4c5f7fa3df75'
        }
      ])
    }
  }

  render () {
    return (
      <View style={ styles.container }>
        <ListView
          style={ styles.list }
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <RenderRow rowData={ rowData } />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFC'
  },
  list: {
    paddingTop: 10
  }
})