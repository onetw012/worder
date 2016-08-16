export const settings = (state = {}, action) => {
	switch (action.type) {
		case 'CURRENT_TAB': {
			return {
				...state,
			};
		}
		default: {
			return state;
		}
	}
};
