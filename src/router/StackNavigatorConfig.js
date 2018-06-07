import CardStackStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator'

const screenInterpolater = (sceneProps) => {
    const { route } = sceneProps.scene
    const params = route.params || {}
    const transition = params.transition || 'forHorizontal'
    return CardStackStyleInterpolator[transition](sceneProps)
};

const StackNavigationConfig = {
  initialRouteName: "Login",
  headerMode: "float",
  transitionConfig: () => ({
    screenInterpolater: CardStackStyleInterpolator.forHorizontal
  })
};

export default StackNavigationConfig
