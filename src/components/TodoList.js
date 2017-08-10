import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import todoListStyle from '../style/todoListStyle.css';

class TodoList extends Component {
  renderTodos() {
    return this.props.todo.map((singleTodo) => {
      let id = _.indexOf(this.props.todo, singleTodo) + 1;
      return (
        <li
          className="list-group-item"
          key={singleTodo.id}>
          {`${id}: `}
          {singleTodo.term}
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

function mapStateToProps({ todo }) {
  return { todo };
}

export default connect(mapStateToProps)(TodoList)
