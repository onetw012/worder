import React from 'react';
import SettingsItemSwitcher from './SettingsItemSwitcher'
import SettingsItemCounter from './SettingsItemCounter'


export default class Settings extends React.Component {
	componentDidMount() {
		const { store } = this.context;
		this.unsubscribe = store.subscribe(() => this.forceUpdate());
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		const { store } = this.context;
		const state = store.getState();
		return (
			<div>
				<div>
					<SettingsItemCounter type="SHOW_WORD_IN_TIMEOUT"/>
				</div>
				<div>
					<SettingsItemSwitcher type="TOGGLE_SHOW_DESCRIPTION"/>
				</div>
				<div>
					<SettingsItemSwitcher type="TOGGLE_SHOW_TRANSLATION"/>
				</div>
				<div>
					<SettingsItemCounter type="NOTIFY_AFTER"/>
				</div>
			</div>
		);
	}
}

Settings.contextTypes = {
	store: React.PropTypes.object
};
