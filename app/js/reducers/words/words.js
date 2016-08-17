import { word } from './word';

export const words = (state = [], action) => {
	switch (action.type) {
		case 'ADD_WORD': {
			return [
				...state,
				word(undefined, action)
			];
		}
		default: {
			return state;
		}
	}
};