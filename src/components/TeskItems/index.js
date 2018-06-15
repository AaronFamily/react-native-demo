import React, { Component } from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native'

import { GradientButton } from 'components/index'
import { TeskButton } from 'images/index'


export default class TeskItems extends Component {
  render () {
    return (
      <View style={ [styles.container, this.props.style] }>
        <Image
          style={ styles.icons }
          source={ this.props.source }
          resizeMode='cover'
        />
        <Text style={ styles.title }>{ this.props.title }</Text>
        { 
          this.props.isDisabled ? 
          <GradientButton
            style={ styles.button }
            title={ this.props.buttonText }
            source={ TeskButton }
            textStyle={ styles.text }
          />
          : 
          <View style={ styles.disableButton }>
            <Text style={ styles.disableText }>{ this.props.buttonText }</Text>
          </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icons: {
    width: 65,
    height: 65,
  },
  title: {
    fontSize: 14,
    color: '#444',
    lineHeight: 18,
  },
  button: {
    width: 92,
    height: 44,
    marginTop: 14
  },
  text: {
    fontSize: 13
  },
  disableButton: {
    width: 78,
    height: 30,
    backgroundColor: '#E7ECF0',
    borderRadius: 30,
    marginTop: 19,
    alignItems: 'center',
    justifyContent: 'center'
  },
  disableText: {
    fontSize: 13,
    color: '#97A2AD'
  }
})