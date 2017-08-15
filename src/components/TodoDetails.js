import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo, selectTodo } from '../actions/index';
import { bindActionCreators } from 'redux';

import activeTodoStyle from '../style/activeTodoStyle.css';

class TodoDetails extends Component {

  onToggleClick() {
    const { toggleTodo } = this.props

    toggleTodo(this.props.activeTodo);
  }

  onDeleteClick() {
    const { deleteTodo, selectTodo } = this.props

    deleteTodo(this.props.activeTodo);
    selectTodo(null);
  }

  render() {

    let activeTodo = this.props.activeTodo;

    if(!activeTodo) {
      return <div className='active-todo'>Select todo to get started.</div>
    }

    return (
      <div className='active-todo'>
        <h3>Todo details:</h3>
        <div>
          <p>Title: {activeTodo.term}</p>
          <p>Is it done: {activeTodo.isDone ? 'Yes' : 'No'}</p>
          <p className="text-muted">Added: {activeTodo.date}</p>
          <button
            onClick={this.onToggleClick.bind(this)}
            className='btn btn-warning'>Toggle
          </button>
          <button
            onClick={this.onDeleteClick.bind(this)}
            className='btn btn-danger'>Delete
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ activeTodo }) {
  return { activeTodo }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleTodo, deleteTodo, selectTodo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoDetails)
