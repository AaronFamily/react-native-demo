import { createStackNavigator } from 'react-navigation'

import RouteConfig from './RootNavigation'
import StackNavigatorConfig from './StackNavigatorConfig'

export default createStackNavigator(RouteConfig, StackNavigatorConfig)