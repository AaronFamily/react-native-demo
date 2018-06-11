import { createStackNavigator } from 'react-navigation'

import { Mine } from 'screen/index'


const MineNav = {
  Mine: {
    screen: Mine,
    navigationOptions:({navigation, screeProps}) => ({
      title: '',
      headerTitleStyle:{
        flex: 1,
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
      }
    })
  }
}

export default createStackNavigator(MineNav, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#fff', 
      borderBottomWidth: 0,
      height: 44,
      elevation: 0
    }
  }
})
