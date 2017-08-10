import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../actions/index';

import addTodoStyle from '../style/addTodoStyle.css';

class AddTodo extends Component {
  constructor(props) {
    super(props)

    this.state = {term: '', id: null, isDone: null};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({ term: e.target.value, id: Date.now(), isDone: false })
  }

  onFormSubmit(e) {
    e.preventDefault();
    
    this.props.addTodo(this.state);
    this.setState({ term: '', id: null, isDone: null});

  }

  render() {
    return (
      <div className="todo-input">
        <form onSubmit={this.onFormSubmit} className="input-group">
  				<input
  					placeholder="Enter todo"
  					className="form-control"
  					value={this.state.term}
  					onChange={this.onInputChange}
  				/>
  				<span className="input-group-btn">
  					<button type="submit" className="btn btn-secondary">Add</button>
  				</span>
  			</form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTodo }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddTodo)
