import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoDetails extends Component {

  render() {
    return (
      <div>
        <h3>Todo details:</h3>
        <div>Title: </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedTodo: state.selectedTodo
  };
}

export default connect(mapStateToProps)(TodoDetails)
