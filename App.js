

import React, {Component} from 'react'
import { View, Text } from 'react-native'
import Post from './src/components/Post'
import Header from './src/components/Header'

const comments = [
			{
				nickname: 'Joana Salles',
				comment: 'Wowww o/'
			},
			{
				nickname: '__erick',
				comment: 'Gang #pas'
			}
]


export default class App extends Component {
  render() {
    return (
		<View style={ { flex: 1, backgroundColor: 'white' } }>
			<Header />
			<Post image={require('./assets/imgs/fence.jpg')} comments={comments} />
		</View>
    )
  }
}
