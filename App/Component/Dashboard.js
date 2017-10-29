import React, { Component } from "react";
import { View, Text } from "react-native";
import { styles } from "./Main";

export default class Dashboard extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text> Dashboard page </Text>
      </View>
    );
  }
}
