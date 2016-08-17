import React from 'react';

import SettingsItemSwitcher from '../containers/SettingsItemSwitcher'
import SettingsItemCounter from '../containers/SettingsItemCounter'

const Settings = () => (
	<div className="settings-wrap">
		<SettingsItemCounter type="SHOW_WORD_IN_TIMEOUT"/>
		<SettingsItemCounter type="NOTIFY_AFTER"/>
		<SettingsItemSwitcher type="TOGGLE_SHOW_DESCRIPTION"/>
		<SettingsItemSwitcher type="TOGGLE_SHOW_TRANSLATION"/>
	</div>
)

export default Settings;
