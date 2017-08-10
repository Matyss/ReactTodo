export const ADD_TODO = 'ADD_TODO';
export const SELECT_TODO = 'SELECT_TODO';

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo
  }
}

export function selectTodo(singleTodo) {
  return {
    type: SELECT_TODO,
    payload: singleTodo
  }
}
