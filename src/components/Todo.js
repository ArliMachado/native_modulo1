import React from "react";
import PropTypes from "prop-types";

import { View, Text, StyleSheet } from "react-native";

const Todo = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

Todo.propTypes = {
  title: PropTypes.string
};

Todo.defaultProps = {
  title: "Todo padrão"
};

const styles = StyleSheet.create({});

export default Todo;
