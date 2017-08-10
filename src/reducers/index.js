import { combineReducers } from 'redux';
import TodoList from './reducer_addTodo';
import SelectTodo from './reducer_details';

const rootReducer = combineReducers({
  todo: TodoList,
  selectedTodo: SelectTodo
});

export default rootReducer;
