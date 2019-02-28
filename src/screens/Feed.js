import React, { Component } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'

import Header from '../components/Header'
import Post from '../components/Post'

export default class Feed extends Component {

 state = {
     posts: [
         {
             id: Math.random(),
             nickname: 'Maria Clara',
             email: 'mariac@gmail.com',
             image: require('../../assets/imgs/fence.jpg'),
             comments: [{
                nickname: 'John Sales',
                comment: 'Teeey',
             },
             {
                nickname: 'Mariiiiia',
                comment: 'Foda!',
             }]
         },
         {
            id: Math.random(),
            nickname: 'Marcelo Gomes',
            email: 'marcelog@gmail.com', 
            image: require('../../assets/imgs/bw.jpg'),
            comments: []
        }
     ]
 }

  render() {
    return (
      <View style={styles.container}> 
            <Header/>
            <FlatList
                  data={this.state.posts}
                  keyExtractor={item => `${item.id}`}
                  renderItem={({ item }) => 
                         <Post key={item.id} {...item} />
                }  
            />
      </View>
    )
  }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
       backgroundColor: '#F5FCFF'
    }
})
