import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import TodoDetails from './TodoDetails';

class App extends Component {
  render() {
    return (
      <div>
        <TodoList />
        <AddTodo />
        <TodoDetails />
      </div>
    );
  }
}

export default App;
