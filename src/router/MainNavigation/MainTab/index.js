import React from 'react'
import { StyleSheet } from 'react-native'

import { createBottomTabNavigator } from "react-navigation"

import { TabBarItem } from 'components/index'
import {
  normalHome,
	selectedHome,
	normalMine,
	selectedMine
} from 'images/index'

import { Home } from 'screen/index'
import Mine from './MineNav/index'

export default MainTab = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions:({navigation, screeProps}) => ({
      header: null,
      headerTitle: '首页',
      headerStyle: styles.navigator,
      headerTitleStyle: styles.navigatorTitle,
      gesturesEnabled:true,
      tabBarVisible: true,
      tabBarLabel:'首页',
      tabBarIcon:(({tintColor,focused}) => {
        return <TabBarItem
          tintColor={ tintColor }
          focused={ focused }
          normalImage={ normalHome }
          selectedImage={ selectedHome }
        />
      }),
    })
  },
  Mine: {
    screen: Mine,
    navigationOptions:({navigation, screeProps}) => ({
      header: null,
      headerTitle: '我的',
      headerStyle:styles.navigator,
      headerTitleStyle:styles.navigatorTitle,
      gesturesEnabled:true,
      tabBarVisible: true,
      tabBarLabel:'我的',
      tabBarIcon:(({tintColor,focused}) => {
        return <TabBarItem
          tintColor={ tintColor }
          focused={ focused }
          normalImage={ normalMine }
          selectedImage={ selectedMine }
        />
      }),
    })
  }
},
{
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  lazy: true,
  initialRouteName: 'Home',
  backBehavior: 'none',
  tabBarOptions:{
    activeTintColor: '#333', 
    inactiveTintColor: '#9E9FA6',
    labelStyle: {
        fontSize: 12,
    },
    style: {
      backgroundColor: '#fff',
      height: 49,
      borderTopWidth: 0
    }
  }
})

const styles = StyleSheet.create({
  navigatorTitle: {
    fontSize: 17,
    color: 'white'
  },
  navigator: {
    backgroundColor: '#fff'
  }
})