import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';

import {ListItem} from 'material-ui/List';

import IcoModeEdit from 'material-ui/svg-icons/editor/mode-edit';


const WordItem = ({ word }) => (
  <ListItem
    key={word.id}
    primaryText={word.title}
    rightIcon={<IcoModeEdit />}
    onClick={ () => {browserHistory.push('category/' + word.categoryId + '/word/' + word.id)} }
  />
);

WordItem.propTypes = {
  word: PropTypes.object.isRequired,
}

export default WordItem;
