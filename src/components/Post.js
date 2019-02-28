import React, { Component } from 'react'
import { View, Dimensions, StyleSheet, Image } from 'react-native'
import Author from './Author'
import Comments from './Comments'
import AddComment from './AddComment'

export default class Post extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={this.props.image} style={styles.container}/>
    <Author email={this.props.email} nickname={this.props.nickname}/>
        <Comments comments={this.props.comments}/>
        <AddComment/>
      </View>
    )
  }
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    image: {
        height: Dimensions.get('window').width * 3 / 4,
        width: Dimensions.get('window').width,
        resizeMode: 'contain'    
    }
})
