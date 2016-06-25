export const currentList = (state = 0, action) => {
	switch (action.type) {
		case 'CHANGE_LIST_INDEX': {
			return action.index || 0;
		}
		default: {
			return state;
		}
	}
};