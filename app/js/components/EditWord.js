import React, {PropTypes} from 'react';
import Subheader from 'material-ui/Subheader';

import EditWordFormContainer from '../containers/EditWordForm';
import TopTitle from './TopTitle';

const EditWord = ({params, onEditWord, currentWord}) => (
  <div>
    <TopTitle title="Edit word:" backUrl={'category/' + params.categoryId}/>
    <EditWordFormContainer onSubmit={onEditWord} currentWord={currentWord} />
  </div>
)

EditWord.propTypes = {
  params: PropTypes.object.isRequired,
  onEditWord: PropTypes.func.isRequired
}

export default EditWord;
