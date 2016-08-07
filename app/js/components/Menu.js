import React from 'react';
import MenuLink from './MenuLink';

const Menu = () => (
	<div>
		<MenuLink item='home'></MenuLink>
		<MenuLink item='lists'></MenuLink>
		<MenuLink item='settings'></MenuLink>
	</div>
);

export default Menu;