import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native'
import PropTypes from 'prop-types'

import { RightArrow } from 'components/index'

export default class JumpList extends Component {
  static defaultProps = {
    title: '',
    isArrow: true,
    triggerClick: () => {}
  }

  static propTypes = {
    style: View.propTypes.style,
    title: PropTypes.string,
    isArrow: PropTypes.bool,
    triggerClick: PropTypes.func
  }

  render () {
    return (
      <View
        onPress={ this.props.triggerClick }
        style={ [styles.container, this.props.style] }
      >
        <Text style={ styles.text }>
          { this.props.title }
        </Text>
        {
          this.props.isArrow ? 
          <RightArrow style={ styles.arrow }></RightArrow> : 
          this.props.children
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 44,
    backgroundColor: '#fff',
    borderBottomWidth: Platform.OS==='android' ? 1: .5,
    borderColor:'#F2F4F5',
    position: 'relative',
    justifyContent: 'center'
  },
  text: {
    fontSize: 15,
    lineHeight: 44,
    color:'#333'
  },
  arrow: {
    position: 'absolute',
    right: 25,
    bottom: 16
  }
})