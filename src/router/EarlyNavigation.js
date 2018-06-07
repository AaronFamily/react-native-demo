import { createStackNavigator } from 'react-navigation'
import StackNavigatorConfig from './StackNavigatorConfig'

import { Guide } from 'screen/index.js'

const EarlyNav = {
  Guide: {
    screen: Guide,
    navigationOptions: ({navigation}) => ({header: null})
  }
}

export default createStackNavigator(EarlyNav, StackNavigatorConfig)