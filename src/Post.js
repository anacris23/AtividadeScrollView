import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Post extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.conteudoCabecario}>
        <Text style={styles.descricao} >  
          {this.props.descricao}
        </Text>
        <Text style={styles.autor}>
          {this.props.autor}
          
        </Text>
        </View>
        <Text style={styles.texto}>
          {this.props.texto}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 20,
  },
conteudoCabecario:{
margin:15
},

  texto: {
    fontSize: 16,
    color: 'black',
    margin: 20,
    textAlign: 'center',
    marginBottom: 35,
  },
  autor: {
    fontSize: 20,

  },

  descricao: {
    fontSize: 25,
    color: 'black'

  }
});