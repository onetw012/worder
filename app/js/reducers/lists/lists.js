import { list } from './list';

export const lists = (state = [], action) => {
	switch (action.type) {
		case 'ADD_LIST': {
			return [
				...state,
				list(undefined, action)
			];
		}
		case 'REMOVE_LIST': {
			// TODO
			return state;
		}
		case 'ADD_WORD': {
			return state.map((lst) => {
				if (lst.id !== action.listId) {
					return lst;
				}
				return list(lst, action);
			});
		}
		default: 
			return state;
	}
};