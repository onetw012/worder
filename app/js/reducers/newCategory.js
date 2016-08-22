export const newCategory = (state = {}, action) => {
	switch (action.type) {
		case 'SET_NAME': {
			return {
				...state,
        name: action.value,
			};
		}
		default: {
			return state;
		}
	}
};
