export const categories = (state = [], action) => {
	switch (action.type) {
		case 'SET_CATEGORY_NAME': {
			return [
				...state.map((category) => {
					if(action.id == category.id) {
						category.name = action.value
					}
					return category;
				}),
			];
		}
		case 'NEW_CATEGORY': {
			const newCategory = action.value;
			state.push({
				...newCategory,
				id: new Date().getTime(),
			});
			return state;
		}
		case 'REMOVE_CATEGORY': {
			const categoryIndex = state.findIndex(category => category.id === parseInt(action.id, 10));
			if (categoryIndex === -1) {
				return state;
			}
			return [
				...state.slice(0, categoryIndex),
				...state.slice(categoryIndex + 1)
			];
		}
		default: {
			return state;
		}
	}
};
