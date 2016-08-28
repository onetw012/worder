import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';

import FloatingActionButton from 'material-ui/FloatingActionButton'
import IcoContentAdd from 'material-ui/svg-icons/content/add';


const CategoryActions = () => (
  <div className="category-actions bar-right">
    <FloatingActionButton
      mini={true}
      onClick={() => {browserHistory.push('newCategory')} } >
      <IcoContentAdd />
    </FloatingActionButton>
  </div>
);

export default CategoryActions;
