import React, { Component } from "react";
import PropTypes from "prop-types";

import { View, Text, StyleSheet } from "react-native";

export default class Todo extends Component {
  static propTypes = {
    tutle: PropTypes.string
  };

  static defaultProps = {
    title: "Todo padrão"
  };
  render() {
    return (
      <View>
        <Text>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
