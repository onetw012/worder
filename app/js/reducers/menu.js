export const menu = (state = {}, action) => {
	switch (action.type) {
		case 'SET_CURRENT_TAB': {
			return {
          ...state,
          currentTab: parseInt(action.value)
        }
		}
		default: {
			return state;
		}
	}
};
