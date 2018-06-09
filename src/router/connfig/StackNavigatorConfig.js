import CardStackStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator'

const screenInterpolater = (sceneProps) => {
    const { route } = sceneProps.scene
    const params = route.params || {}
    const transition = params.transition || 'forHorizontal'
    return CardStackStyleInterpolator[transition](sceneProps)
};

const defaultConfig = {
  initialRouteName: "MainTab",
  headerMode: "float",
  transitionConfig: () => ({
    screenInterpolater: CardStackStyleInterpolator.forHorizontal,
  }),
  navigationOptions: {
    headerStyle: { 
      backgroundColor: '#fff', 
      borderBottomWidth: 0,
      height: 44
    },
  }
}

export default StackNavigationConfig = (options={}) => {
  return { ...defaultConfig, ...options }
}