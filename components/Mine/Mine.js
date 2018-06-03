import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet
} from 'react-native'

class Mine extends Component {
	static navigationOptions = () => {
		return {
			title: '个人中心',
			header:null
		}
	}

	render () {
		return (
			<View style={ styles.mineBox }>
				<Text style={ styles.mineText }>
					这是个人中心
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	mineBox: {
		flex: 1,
		backgroundColor: 'blue'
	},
	mineText: {
		fontSize: 24,
		color: '#000'
	}
})

export default Mine