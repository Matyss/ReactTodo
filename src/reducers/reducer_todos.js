import _ from 'lodash';
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/index';


export default function(state = {}, action) {
	switch (action.type) {
		case ADD_TODO:
			return { ...state, [action.payload.id]: action.payload}
		case TOGGLE_TODO:
			let id = action.payload.id;
			return { ...state, [id]: { ...state[id], isDone: !action.payload.isDone}}
		case DELETE_TODO:
			return _.omit(state, action.payload.id)
		default:
			return state
	}
	return state;
}
