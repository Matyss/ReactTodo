import { ADD_TODO, SELECT_TODO } from '../actions/index';


export default function(state = [], action) {
	switch (action.type) {
		case ADD_TODO:
			return [ action.payload, ...state ];
			break;

		case SELECT_TODO:
				return action.payload;
				break;

		default:
			// do nothing
	}
	return state;
}
