import { createBottomTabNavigator } from 'react-navigation'

import Home from './../../components/Home/Home.js'
import Mine from './../../components/Mine/Mine.js'

export default createBottomTabNavigator(
	{
	  Home: Home,
	  Mine: Mine
	}
)
