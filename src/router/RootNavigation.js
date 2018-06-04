import Guide from './GuideNavigation'
import MainTab from './TabNavigator'
import Detail from './pages/subPages/VideoDetail'

const RootNavigator = {
  Guide: {
    screen:Guide
  },
  MainTab: {
    screen: MainTab,
    navigationOptions: ({navigation}) => ({header: null, gesturesEnable: true})
  },
  Detail: {
    screen: VideoDetail
  }
}

export default RootNavigator;