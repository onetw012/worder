import React, { PropTypes } from 'react';

import BackButton from './BackButton';


const EditWord = ({params}) => (
  <div>
    <BackButton
      to={ 'category/' + params.categoryId } />
      EditWord
  </div>
)

export default EditWord;
