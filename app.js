import './src/config/ReactotronConfig';
import './src/config/DevToolsConfig';

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Todo from './src/components/Todo';

console.tron.log('Hello');

export default class App extends Component {
  state = {
    todos: ['Fazer café', 'Estudar react native'],
  };

  addTodo = () => {
    this.setState({ todos: [...this.state.todos, 'dormir'] });
  };

  render() {
    return (
      <View style={styles.container}>
        <Todo title="Fazer café" />
        <Todo title="Estudar goNative" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
