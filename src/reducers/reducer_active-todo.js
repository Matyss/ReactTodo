import { SELECT_TODO } from '../actions/index';


export default function(state = null, action) {
	switch (action.type) {
		case SELECT_TODO:
			return action.payload;
			break;

		default:
			// do nothing
	}
	return state;
}
