import React, { Component } from 'react';
import { connect } from 'react-redux';

import activeTodoStyle from '../style/activeTodoStyle.css';

class TodoDetails extends Component {

  render() {

    if(!this.props.activeTodo) {
      return <div className='active-todo'>Select todo to get started.</div>
    }

    return (
      <div className='active-todo'>
        <h3>Todo details:</h3>
        <div>
          <p>Title: {this.props.activeTodo.term}</p>
          <p>Is it done: {this.props.activeTodo.isDone ? 'Yes' : 'No'}</p>
          <p className="text-muted">Added: {this.props.activeTodo.date}</p>
          <button className='btn btn-danger'>Delete todo</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeTodo: state.activeTodo
  };
}

export default connect(mapStateToProps)(TodoDetails)
