import { createStackNavigator } from 'react-navigation'
import StackNavigatorConfig from '../../connfig/StackNavigatorConfig'

import { Mine } from 'screen/index'


const MineNav = {
  Mine: {
    screen: Mine,
    navigationOptions:({navigation, screeProps}) => ({
      title: 'dasdasd'
    })
  }
}

export default createStackNavigator(MineNav, StackNavigatorConfig({ initialRouteName: 'Mine' }))
