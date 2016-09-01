import { createStore, combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import {reducer as formReducer} from 'redux-form';

import { loadState, saveState } from './local-storage';

/* REDUCERS */
import { settings } from '../reducers/settings';
import { currentWord } from '../reducers/words/current-word';
import { categories } from '../reducers/categories';
import { newCategory } from '../reducers/newCategory';
import { menu } from '../reducers/menu';
import { words } from '../reducers/words/words';
import { activeWords } from '../reducers/words/active-words';

const DEFAULT_STATE = {
	currentWord: 0,
	menu: {
		currentTab: 0
	},
	activeWords: [],
	words: [{
		id: 1,
		title: 'One',
		translation: 'Ein',
		description: 'Number',
		categoryId: 1
	},{
		id: 2,
		title: 'Two',
		translation: 'Zwei',
		description: 'Number',
		categoryId: 1,
	},{
		id: 3,
		title: 'Three',
		translation: 'Drei',
		description: 'Number',
		categoryId: 1
	}],
	newCategory: {
		name: '',
		active: false,
	},
	categories: [{
		id: 1,
		name: 'My list',
		active: false
	}, {
		id: 2,
		name: 'Your list',
		active: false
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
	const reducers = combineReducers({
		currentWord,
		menu,
		activeWords,
		words,
		newCategory,
		categories,
		settings,
		form: formReducer,
		routing: routerReducer,
	});
	const store = createStore(reducers, persistedState);

	store.subscribe(() => {
		saveState(store.getState());
	});

	return store;
};
