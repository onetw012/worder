import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';

import {ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';

import IcoModeEdit from 'material-ui/svg-icons/editor/mode-edit';

const Category = ({ category }) => (
  <Paper zDepth={1}>
    <ListItem
      key={category.id}
      primaryText={category.name}
      rightIcon={<IcoModeEdit />}
      onClick={() => { browserHistory.push('category/' + category.id) }}
    />
  </Paper>
);

Category.propTypes = {
  category: PropTypes.object.isRequired,
}

export default Category;
