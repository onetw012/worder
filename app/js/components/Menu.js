import React, { PropTypes } from 'react';

import {Tabs, Tab} from 'material-ui/Tabs';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionList from 'material-ui/svg-icons/action/list';
import ActionSettings from 'material-ui/svg-icons/action/settings';

const iconStyles = {
  marginRight: 24,
};

const Menu = ({currentTab, setCurrentTab}) => (
	<Tabs
  		initialSelectedIndex={currentTab}
  		onChange={setCurrentTab}
    >
		<Tab
			value={0}
			icon={<ActionHome style={iconStyles} />}
		/>
		<Tab
			value={1}
			icon={<ActionList style={iconStyles} />}
		/>
		<Tab
			value={2}
			icon={<ActionSettings style={iconStyles} />}
		/>
	</Tabs>
);

Menu.propTypes = {
  currentTab: PropTypes.number.isRequired,
}

export default Menu;
