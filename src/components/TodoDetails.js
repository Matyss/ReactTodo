import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoDetails extends Component {

  render() {
    return (
      <div>
        <h3>Todo details:</h3>
        <div>Title: {this.props.todo.term}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todo: state.todo
  };
}

export default connect(mapStateToProps)(TodoDetails)
