import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { selectTodo } from '../actions/index';

import todoListStyle from '../style/todoListStyle.css';

class TodoList extends Component {
  renderTodos() {
    return this.props.todo.map((singleTodo) => {
      let id = _.indexOf(this.props.todo, singleTodo) + 1;
      return (
        <li
          className="list-group-item"
          key={singleTodo.id}
          onClick={() => this.props.selectTodo(singleTodo)}
          >
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectTodo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
