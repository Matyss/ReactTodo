import { combineReducers } from 'redux';
import Todos from './reducer_todos';



const rootReducer = combineReducers({
  todo: Todos
});

export default rootReducer;
