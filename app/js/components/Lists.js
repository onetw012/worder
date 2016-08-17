import React from 'react';

import Menu from './Menu';
import Switcher from './Switcher';

export default class Lists extends React.Component {
	componentDidMount() {
		const { store } = this.context;
		this.unsubscribe = store.subscribe(() => this.forceUpdate());
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		return (
			<div>Lists isn't working</div>
		)
	}
}

Lists.contextTypes = {
	store: React.PropTypes.object
};
