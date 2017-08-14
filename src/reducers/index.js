import { combineReducers } from 'redux';
import Todos from './reducer_todos';
import ActiveTodo from './reducer_active-todo';



const rootReducer = combineReducers({
  todos: Todos,
  activeTodo: ActiveTodo
});

export default rootReducer;
