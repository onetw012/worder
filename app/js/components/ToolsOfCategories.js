import React, { PropTypes } from 'react';

import {ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import { browserHistory } from 'react-router';

import IcoContentAdd from 'material-ui/svg-icons/content/add';

const ToolsOfCategories = () => (
  <Paper zDepth={1}>
    <ListItem
      primaryText="Add new category"
      rightIcon={<IcoContentAdd />}
      onClick={() => {browserHistory.push('newCategory')} }
    />
  </Paper>
);

export default ToolsOfCategories;
