export const settings = (state = {}, action) => {
	switch (action.type) {
		case 'SHOW_WORD_IN_TIMEOUT': {
			return {
				...state,
				timeout: action.value
			};
		}
		case 'TOGGLE_SHOW_DESCRIPTION': {
			return {
				...state,
				showDescription: !state.showDescription
			};
		}
		case 'TOGGLE_SHOW_TRANSLATION': {
			return {
				...state,
				showTranslation: !state.showTranslation
			};
		}
		case 'NOTIFY_AFTER': {
			return {
				...state,
				showNotification: action.value
			};
		}
		default: {
			return state;
		}
	}
};