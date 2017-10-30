import React, { Component } from "react";
import Badge from "./Badge";
import Profile from "./Profile";
import Repositories from "./Repositories";
import { API } from "../Utils/GithubApi";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} from "react-native";

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350
  },
  buttonText: {
    fontSize: 24,
    color: "white",
    alignSelf: "center"
  },
  bioText: {
    fontSize: 15,
    color: "#203525",
    padding: 20,
    alignSelf: "center"
  }
});

export default class Dashboard extends Component {
  makeBackground(btn) {
    var obj = {
      flexDirection: "row",
      alignSelf: "stretch",
      justifyContent: "center",
      flex: 1
    };

    if (btn === 0) {
      obj.backgroundColor = "#5b9693";
    } else if (btn === 1) {
      obj.backgroundColor = "#a6bcbb";
    }
    return obj;
  }
  goToProfile() {
    this.props.navigator.push({
      name: "Profile",
      component: Profile,
      passProps: { userInfo: this.props.userInfo }
    });
  }
  goToRepos() {
    API.getRepos(this.props.userInfo.login).then(res => {
      console.log(res);
      this.props.navigator.push({
        title: "Repositories Page",
        component: Repositories,
        passProps: {
          userInfo: this.props.userInfo,
          repos: res
        }
      });
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: this.props.userInfo.avatar_url }}
          style={styles.image}
        />
        <Text style={styles.bioText}>{this.props.userInfo.bio}</Text>
        <TouchableHighlight
          style={this.makeBackground(0)}
          onPress={this.goToProfile.bind(this)}
        >
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(1)}
          onPress={this.goToRepos.bind(this)}
        >
          <Text style={styles.buttonText}>View Repos</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
