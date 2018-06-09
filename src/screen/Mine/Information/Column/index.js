import React, { Component } from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native'

import PropTypes from 'prop-types'

export default class Column extends Component {
  static defaultProps = {
    text: '',
    isDisable: true
  }

  static propTypes = {
    style: View.propTypes.style,
    disabledTextColor: PropTypes.string,
    canTextColor: PropTypes.string,
    disabledSource: Image.propTypes.source,
    canSource: Image.propTypes.source,
    text: PropTypes.string,
    isDisable: PropTypes.bool
  }

  render () {
    const disableds = this.props.isDisable

    return (
      <View style={ styles.box }>
        <Image
          style={ styles.icon }
          source={ 
            disableds? 
            this.props.canSource:
            this.props.disabledSource
          }
          resizeMode="cover"
        ></Image>
        <Text 
          style={[
            styles.text,
            { 
              color: disableds? 
              this.props.canTextColor: 
              this.props.disabledTextColor 
            }]}
          >{ this.props.text }</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center'
  },
  icon: {
    width: 18,
    height: 18
  },
  text: {
    color: '#333',
    fontSize: 17,
    marginLeft: 5
  }
})