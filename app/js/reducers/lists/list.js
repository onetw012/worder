import { words } from './words/words';

export const list = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_LIST': {
			return {
				id: action.id,
				name: action.name,
				words: []
			};
		}
		case 'ADD_WORD': {
			return {
				...state,
				words: words(state.words, action)
			};
		}
		default: {
			return state;
		}
	}
};