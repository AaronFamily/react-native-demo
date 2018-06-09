import { createStackNavigator } from 'react-navigation'
import StackNavigatorConfig from '../connfig/StackNavigatorConfig'

import { Guide } from 'screen/index'

const EarlyNav = {
  Guide: {
    screen: Guide,
    navigationOptions: ({navigation}) => ({header: null})
  }
}

export default createStackNavigator(EarlyNav, StackNavigatorConfig)