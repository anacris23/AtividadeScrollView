import React, {Component} from 'react';
import {Platform, StyleSheet,ScrollView, Text, View} from 'react-native';
import Post from './Post';


export default class App extends Component{
  render() {
    return (
      <ScrollView style={styles.container}>
        <Post/>
        <Post/>
        <Post/>
    
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'red'

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
