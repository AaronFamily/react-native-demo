import Guide from './GuideNavigation'
import MainTab from './TabNavigator'
import Detail from '../views/Detail/index'

const RootNavigator = {
  Guide: {
    screen: Guide
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