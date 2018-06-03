import React, { Component } from 'react'

import {
	View,
	Text,
	Button
} from 'react-native'

class Detail extends Component {
	render () {
		return (
			<View>
				<Button
					title="去主页"
					onPress={ () => this.props.navigation.navigate('Index') }
				>
				</Button>
				<Text>这是详情页面</Text>
			</View>
		)
	}
}

export default Detail
