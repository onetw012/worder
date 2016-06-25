import React from 'react';
import { Provider } from 'react-redux';
import Word from './Word';
import ChangeWordButtons from './ChangeWordButtons';

const WorderApp = () => (
	<div>
		<Word />
		<ChangeWordButtons />
	</div>
);

const Root = ({ store }) => (
	<Provider store={ store }>
		<WorderApp/>
	</Provider>
);

export default Root;