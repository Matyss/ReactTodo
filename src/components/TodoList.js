import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { selectTodo } from '../actions/index';

import todoListStyle from '../style/todoListStyle.css';

class TodoList extends Component {
  renderTodos() {
    return this.props.todos.map((todo) => {
      let id = _.indexOf(this.props.todos, todo) + 1;
      return (
        <li
          className="list-group-item"
          key={todo.id}
          onClick={() => this.props.selectTodo(todo)}
          >
            {`${id}: `}
            {todo.term}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="list-container">
        <h3>Your todos:</h3>
        <hr />
        <ul className="list-group">
          {this.renderTodos()}
  			</ul>
      </div>
    );
  }
}

function mapStateToProps({ todos }) {
  return { todos };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectTodo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
