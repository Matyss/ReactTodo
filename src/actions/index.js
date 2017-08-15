export const ADD_TODO = 'ADD_TODO';
export const SELECT_TODO = 'SELECT_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo
  }
}

export function selectTodo(activeTodo) {
  return {
    type: SELECT_TODO,
    payload: activeTodo
  }
}

export function toggleTodo(activeTodo) {
  return {
    type: TOGGLE_TODO,
    payload: activeTodo
  }
}

export function deleteTodo(activeTodo) {
  return {
    type: DELETE_TODO,
    payload: activeTodo
  }
}
