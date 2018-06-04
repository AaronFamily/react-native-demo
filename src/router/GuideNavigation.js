import { createStackNavigator } from 'react-navigation'
import StackNavigatorConfig from './app/StackNavigatorConfig'

import GuidePage1 from '../views/Guide/page1/index'
import GuidePage2 from '../views/Guide/page2/index'

const GuideRouter = {
  GuidePage1: {
    screen:GuidePage1,
    navigationOptions: ({navigation}) => ({header: null})
  },
  GuidePage2: {
    screen:GuidePage2,
      navigationOptions: ({navigation}) => ({header: null})
  }
}

export default createStackNavigator(GuideRouter, StackNavigatorConfig)