export const word = (state = {}, action) => {
	switch (action.type) {
		case 'NEW_WORD': {
			return {
				id: action.data.id || new Date().getTime(),
				title: action.data.title || '',
				translation: action.data.translation || '',
				description: action.data.description || '',
				categoryId: action.data.categoryId || null
			};
		}
		default: {
			return state;
		}
	}
};
