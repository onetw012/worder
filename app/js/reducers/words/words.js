import { word } from './word';

export const words = (state = [], action) => {
	debugger;
	switch (action.type) {
		case 'NEW_WORD': {
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
