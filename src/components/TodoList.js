import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { selectTodo } from '../actions/index';

import todoListStyle from '../style/todoListStyle.css';

class TodoList extends Component {

  renderTodos() {
    const todoDone = {
      textDecoration: 'line-through',
      color: 'green'
    }

    return _.map(this.props.todos, todo => {
      return (
        <li
          className="list-group-item"
          key={todo.id}
          onClick={() => this.props.selectTodo(todo)}
          style={todo.isDone ? todoDone : null}
          >
            {todo.term}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="list-container">
        <h3>Your todos [{_.keys(this.props.todos).length}]:</h3>
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
