export const currentWord = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT_WORD': {
			return state + 1;
		}
		case 'DECREMENT_WORD': {
			return (state ? state - 1 : 0);
		}
		default: {
			return state;
		}
	}
};