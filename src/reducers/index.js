import { combineReducers } from 'redux';
import TodoList from './reducer_addTodo';

const rootReducer = combineReducers({
  todo: TodoList
});

export default rootReducer;
