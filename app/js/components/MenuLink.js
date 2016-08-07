import React from 'react';
import { Link } from 'react-router';

const MenuLink = ({ item }) => (
	<Link 
		to={ item === 'home' ? '/popup.html' : `/${item}` }
	>
		{ item }
	</Link>
);

export default MenuLink;