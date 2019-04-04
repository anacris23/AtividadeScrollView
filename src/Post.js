import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export default class Post extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 14, color: "blue" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#fff",
        margin: 20,
    }

});