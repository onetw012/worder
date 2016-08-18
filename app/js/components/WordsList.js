import React, {PropTypes} from 'react';

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import WordItem from './WordItem';


const WordsList = ({wordsList}) => (
	<div>
		<Subheader>Words:</Subheader>
		{wordsList.map(word =>
			<WordItem
				key={word.id}
				word={word} />
		)}
	</div>
)

WordsList.propTypes = {
	wordsList: PropTypes.array.isRequired,
};

export default WordsList;
