import { 
  Login,
  Registered,
  Verification,
  Detail,
  PaymentDetails
} from 'screen/index.js'
import EarlyNav from '../Early/EarlyNavigation'
import Main from '../MainNavigation/index'

const RootNavigator = {
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({ header: null, gesturesEnable: false })
  },
  Registered: {
    screen: Registered,
    navigationOptions: ({ navigation }) => ({ header: null, gesturesEnable: false })
  },
  Verification: {
    screen: Verification,
    navigationOptions: ({ navigation }) => ({ header: null, gesturesEnable: false })
  },
  Early: {
    screen: EarlyNav,
    navigationOptions: ({ navigation }) => ({ header: null, gesturesEnable: false })
  },
  Main: {
    screen: Main,
    navigationOptions: ({ navigation }) => ({ header: null, gesturesEnable: false })
  },
  Detail: {
    screen: Detail
  },
  PaymentDetails: {
    screen: PaymentDetails,
    navigationOptions:({navigation, screeProps}) => ({ title: '收支明细' })
  }
}

export default RootNavigator