import React, {PropTypes} from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import '../../scss/main.scss';

import Word from './Word';
import ChangeWordButtons from './ChangeWordButtons';
import Menu from './Menu';
import Lists from './Lists';
import Settings from './Settings';

const WorderApp = () => (
	<div>
		<Menu />
		<Word />
		<ChangeWordButtons />
	</div>
);

const Root = ({ store }) => (
	<Provider store={ store }>
		<Router history={ browserHistory }>
			<Route path='/popup.html' component={ WorderApp } />
			<Route path="lists" component={Lists} />
			<Route path="settings" component={Settings} />
		</Router>
	</Provider>
);

export default Root;