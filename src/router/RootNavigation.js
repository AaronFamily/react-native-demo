import Guide from './GuideNavigation'
import MainTab from './TabNavigator'
import Detail from '../views/Detail'

const RootNavigator = {
  Guide: {
    screen: Guide,
    navigationOptions: ({ navigation }) => ({ header: null, gesturesEnable: true })
  },
  MainTab: {
    screen: MainTab,
    navigationOptions: ({navigation}) => ({header: null, gesturesEnable: true})
  },
  Detail: {
    screen: Detail
  }
}

export default RootNavigator;