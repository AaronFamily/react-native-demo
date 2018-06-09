import { Login, Invitation, Detail } from 'screen/index.js'
import EarlyNav from '../Early/EarlyNavigation'
import MainTab from '../MainTab/TabNavigator'

const RootNavigator = {
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({ header: null, gesturesEnable: false })
  },
  Invitation: {
    screen: Invitation,
    navigationOptions: ({ navigation }) => ({ header: null, gesturesEnable: false })
  },
  Early: {
    screen: EarlyNav,
    navigationOptions: ({ navigation }) => ({ header: null, gesturesEnable: false })
  },
  MainTab: {
    screen: MainTab,
    navigationOptions: ({navigation}) => ({header: null, gesturesEnable: false})
  },
  Detail: {
    screen: Detail
  }
}

export default RootNavigator;