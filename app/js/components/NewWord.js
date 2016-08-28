import React, { PropTypes } from 'react';

import BackButton from './BackButton';


const AddWordToCategory = ({params}) => (
  <div>
    <BackButton
      to={"/category/" + params.categoryId } />
    Add word to category id: {params.categoryId}
  </div>
)

export default AddWordToCategory;
