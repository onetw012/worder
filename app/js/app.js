import React from 'react';
import { render } from 'react-dom';
import { configureStore } from './configure-store'

import Root from './components/Root';

// Default store
/*{
	currentWord: 0,
	currentList: 0,
	lists: [
		{
			name: '',
			id: 1,
			words: [
				{
					id: 1,
					title: 'One',
					translation: 'Ein',
					description: 'Some description'
				}
			]
		}
	],
	settings: {
		timeout: 30,
		showDescription: true,
		showTranslation: false,
		showNotification: 0
	}
}*/

const store = configureStore();

render(
	<Root store={store} />,
	document.getElementById('root')
);