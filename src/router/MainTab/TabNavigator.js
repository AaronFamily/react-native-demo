import React from 'react'
import {
  Image,
  StyleSheet
} from 'react-native'

import { createBottomTabNavigator } from "react-navigation"

import HomeNav from './HomeNav/HomeNavigation'
import MineNav from './MineNav/MineNavigation'

import { TabBarItem } from 'components/index'
import {
  normalHome,
	selectedHome,
	normalMine,
	selectedMine
} from 'images/index'

export default MainTab = createBottomTabNavigator({
  Home: {
    screen: HomeNav,
    navigationOptions:({navigation, screeProps}) => ({
      header:null,
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
    screen: MineNav,
    navigationOptions:({navigation, screeProps}) => ({
      header:null,
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
  initialRouteName: 'Mine',
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
    backgroundColor: '#fff',
    
  }
})