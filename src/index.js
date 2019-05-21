import './config/ReactotronConfig';

import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import Todo from './components/Todo';

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
        {this.state.todos.map(todo => (
          <Todo title={todo} key={Math.random()} />
        ))}
        <Button title="Adicionar todo" onPress={this.addTodo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});
