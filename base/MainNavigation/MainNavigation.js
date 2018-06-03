import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation'

import Index from '../../pages/Index/Index.js'
import Detail from '../../pages/Detail/Detail.js'

export default createStackNavigator({
	Detail: {
  	screen: Detail
  },
  Index: {
    screen: Index
  }
})