import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  WebView,
  View,
  StyleSheet
} from "react-native";

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8ab580",
    flexDirection: 'column'
  }
});

export default class ExternalLink extends Component {
  render(){
    return(
      <View style={styles.container}>
      <WebView
       source={{uri: this.props.url}} />
      </View>
    )
  }
}
ExternalLink.propTypes = {
  url: PropTypes.string.isRequired
}
