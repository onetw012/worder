import React, {PropTypes} from 'react';

import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import Category from './Category';
import CategoryActions from './CategoryActions'

const Categories = ({categories}) => (
  <div>
    <List className="categories-wrap">
      <Subheader>Categories:</Subheader>
      {categories.map(category => <Category key={category.id} category={category}/>)}
      <CategoryActions/>
    </List>
  </div>
)

Categories.propTypes = {
  categories: PropTypes.array.isRequired
};

export default Categories;
