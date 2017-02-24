import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			//Always return a new state in React and redux. Never manipulate state
			return [ action.payload.data, ...state ]
			break;
		default:

	}
	return state;
}
