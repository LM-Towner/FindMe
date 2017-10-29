import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

import Main from './App/Component/Main';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111"
  },
});

export default class gitHubUserFinder extends Component {
  render() {
    return(
      <NavigatorIOS 
      initialRoute={{ 
        component: Main,
        title: 'Find a Github User'
      }}
      style={styles.container}
      />
    );
  }
}
AppRegistry.registerComponent("gitHubUserFinder", () => gitHubUserFinder);
