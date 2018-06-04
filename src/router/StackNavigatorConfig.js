import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'

const screenInterpolater = (sceneProps) => {
    const { route } = sceneProps.scene;
    const params = route.params || {};
    const transition = params.transition || 'forHorizontal';
    return CardStackStyleInterpolator[transition](sceneProps);
};

const StackNavigationConfig = {
    initialRouteName: 'MainTab',
    headerMode: 'float',
    transitionConfig:() => ({
        screenInterpolater: CardStackStyleInterpolator.forHorizontal
    })
}

export default StackNavigationConfig;
