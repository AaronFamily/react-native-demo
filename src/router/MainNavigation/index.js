import { createStackNavigator } from 'react-navigation'
import StackNavigatorConfig from '../connfig/StackNavigatorConfig'

import MainTab from './MainTab/index'
import { Integral, Settings } from 'screen/index'

const Main = {
  MainTab: {
    screen: MainTab,
    navigationOptions: ({navigation}) => ({header: null})
  },
  Integral: {
    screen: Integral,
    navigationOptions:({navigation, screeProps}) => ({
      title: 'HGBC健康积分',
    }),
  },
  Settings: {
    screen: Settings,
    navigationOptions:({navigation, screeProps}) => ({
      title: '账户设置'
    })
  }
}

export default createStackNavigator(Main, StackNavigatorConfig({initialRouteName: 'Settings'}))