import React, { Component } from 'react'
import {
	StyleSheet,
	View,
	Text,
	Button
} from 'react-native'

class Home extends Component {
	static navigationOptions = () => {
		return {
			title: '首页',
			header:null
		}
	}

	render () {
		return (
			<View style={ styles.homeBox }>
				<Text style={ styles.homeText }>
					这是首页
				</Text>
				<Button
					onPress={ () => this.props.navigation.navigate('Detail') }
					title="进入个人中心"
				></Button>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	homeBox: {
		backgroundColor: 'red',
		flex: 1
	},
	homeText: {
		fontSize: 24,
		color: '#fff'
	}
})

export default Home