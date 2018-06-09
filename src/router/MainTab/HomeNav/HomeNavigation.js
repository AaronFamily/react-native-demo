import { createStackNavigator } from 'react-navigation'
import StackNavigatorConfig from '../../connfig/StackNavigatorConfig'

import { Home } from 'screen/index'

const HomeNav = {
  Home: {
    screen: Home,
    navigationOptions:({navigation, screeProps}) => ({
      header:null,
    })
  }
}

export default createStackNavigator(HomeNav, StackNavigatorConfig({ initialRouteName: 'Home' }))
