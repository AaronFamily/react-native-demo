import React, { Component } from "react"
import {
	View,
	ActivityIndicator,
	Text,
	ListView,
	Button
} from 'react-native'

export default class LoadingContainer extends Component {
	constructor(props) {
	  super(props)
	
	  this.state = {
	  	data: null,
	  	error: false
	  }
	}

	componentWillMount () {
		this._req()
	}

	render () {
		const { data, error } = this.state

		if (error) {
			return (
				<View style={ { flex: 1, ...FLEX_CENTER } }>
					<Text>网络错误，请重试</Text>
					<Button 
						title="重试"
						onPress={ this._req }
					/>
				</View>
			)
		}

		if (!data) {
			return (
				<View style={ { flex: 1, ...FLEX_CENTER } }>
					<ActivityIndicator />
				</View>
			)
		}

		if (this.props.type === 'ds') {
			const ds = new ListView.DataSource({
				rowHasChanged: (r1, r2) => r1 !== r2
			})

			const listData = this.props.getListData(data)
			const list = ds.cloneWithRows(listData)

			return (
				<View style={ { flex: 1} }>
					{React.cloneElement(this.props.children, {dataSource: list})}
				</View>
			)
		} else {
			return (
				<View style={ { flex: 1} }>
					{React.cloneElement(this.props.children, {data: this.state.data})}
				</View>
			)
		}
	}

	async _req () {
		try {
			const data = await this.props.request()

			this.setState({data, error: false})
		} catch (ex) {
			this.setState({error: true})
		}
	}
}