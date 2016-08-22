export const categories = (state = {}, action) => {
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
		default: {
			return state;
		}
	}
};
