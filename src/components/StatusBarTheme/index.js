import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import PropTypes from 'prop-types'

export default class StatusBarTheme extends Component {
  static defaultProps = {
    color: '#fff',
    barStyle: 'dark-content'
  }

  static propTypes = {
    color: PropTypes.string,
    barStyle: PropTypes.string
  }

  render () {
    return (
      <StatusBar
        backgroundColor={ this.props.color }
        translucent={false}
        barStyle={ this.props.barStyle }
      />
    )
  }
}