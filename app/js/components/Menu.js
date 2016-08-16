import React from 'react';

import {Tabs, Tab} from 'material-ui/Tabs';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionList from 'material-ui/svg-icons/action/list';
import ActionSettings from 'material-ui/svg-icons/action/settings';

const iconStyles = {
  marginRight: 24,
};

const Menu = ({secectedIndex}) => (
	<Tabs
  		initialSelectedIndex={secectedIndex}
  		onChange={(e, r, t) => {console.log(e, r, t);}}
    >
		<Tab
			value="/worder"
			icon={<ActionHome style={iconStyles} />}
		/>
		<Tab
			value="/lists"
			icon={<ActionList style={iconStyles} />}
		/>
		<Tab
			value="/settings"
			icon={<ActionSettings style={iconStyles} />}
		/>
	</Tabs>
);

export default Menu;
