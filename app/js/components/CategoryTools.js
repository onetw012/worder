import React, { PropTypes } from 'react';

import {ListItem} from 'material-ui/List';
import { browserHistory } from 'react-router';

import IcoContentAdd from 'material-ui/svg-icons/content/add';

const CategoryTools = () => (
  <ListItem
    primaryText="Add new category"
    rightIcon={<IcoContentAdd />}
    onClick={() => {browserHistory.push('newCategory')} }
  />
);

export default CategoryTools;
