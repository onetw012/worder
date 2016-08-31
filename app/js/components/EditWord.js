import React, {PropTypes} from 'react';
import Subheader from 'material-ui/Subheader';

import BackButton from './BackButton';
import EditWordReduxForm from '../forms/EditWord';

const EditWord = ({params, onEditWord, currentWord}) => (
  <div>
    <BackButton to={'category/' + params.categoryId}/>
    <Subheader>Edit word:</Subheader>
    <EditWordReduxForm onSubmit={onEditWord} currentWord={currentWord} />
  </div>
)

EditWord.propTypes = {
  params: PropTypes.object.isRequired,
  onEditWord: PropTypes.func.isRequired
}

export default EditWord;
