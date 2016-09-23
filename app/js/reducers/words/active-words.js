export const activeWords = (state = {}, action) => {
	switch (action.type) {
		case 'SET_ACTIVE_WORDS': {
			return action.wordList || state;
		}
		case 'REMOVE_WORDS_BY_CATEGORY': {
			return state.filter(word => String(word.categoryId) !== String(action.categoryId));
		}
		default: {
			return state;
		}
	}
};