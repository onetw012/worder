import { createStore, combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import { loadState, saveState } from './local-storage';

/* REDUCERS */
import { settings } from '../reducers/settings';
import { currentWord } from '../reducers/current-word';
import { currentList } from '../reducers/current-list';
import { lists } from '../reducers/lists/lists';
import { menu } from '../reducers/menu';

const DEFAULT_STATE = {
	currentWord: 0,
	currentList: 0,
	menu: {
		currentTab: 1
	},
	lists: [{
		name: 'My list',
		id: 1,
		words: [
			{
				id: 1,
				title: 'One',
				translation: 'Ein',
				description: 'Number'
			},
			{
				id: 2,
				title: 'Two',
				translation: 'Zwei',
				description: 'Number'
			}
		]
	}],
	settings: {
		timeout: 0,
		showDescription: true,
		showTranslation: true,
		showNotification: 0
	}
};


export const configureStore = () => {
	const persistedState = loadState() || DEFAULT_STATE;
	const worderApp = combineReducers({
		currentWord,
		currentList,
		menu,
		lists,
		settings,
		routing: routerReducer,
	});
	const store = createStore(worderApp, persistedState);
	store.subscribe(() => {
		saveState(store.getState());
	});

	return store;
};
