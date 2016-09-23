import { words } from './words';

export const currentWord = (state = 0, action) => {
	const activeWordsLength = action.activeWordsLength;
	switch (action.type) {
		case 'INCREMENT_WORD': {
			return (state < activeWordsLength - 1 ? state + 1 : 0);
		}
		case 'DECREMENT_WORD': {
			return (state < 1 ? activeWordsLength - 1 : state - 1);
		}
		case 'NULL_WORD': {
			return 0;
		}
		default: {
			return state;
		}
	}
};