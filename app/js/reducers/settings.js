export const settings = (state = {}, action) => {
	switch (action.type) {
		case 'SET_TIMEOUT': {
			return {
				...state,
				timeout: action.value
			};
		}
		case 'SET_DESCRIPTION': {
			return {
				...state,
				showDescription: !!action.value
			};
		}
		case 'SET_TRANSLATION': {
			return {
				...state,
				showTranslation: !!action.value
			};
		}
		case 'SET_NOTIFICATION': {
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