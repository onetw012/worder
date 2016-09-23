import React, {PropTypes} from 'react';
import Subheader from 'material-ui/Subheader';

import EditWordFormContainer from '../containers/Word/EditWordForm';
import TopTitle from './TopTitle';

const EditWord = ({params, onEditWord, currentWord, categoryList}) => (
  <div>
    <TopTitle title="Edit word:" backUrl={'category/' + params.categoryId}/>
    <EditWordFormContainer onSubmit={onEditWord} currentWord={currentWord} categoryList={categoryList}/>
  </div>
)

EditWord.propTypes = {
  currentWord: PropTypes.object.isRequired,
  categoryList: PropTypes.array.isRequired,
  params: PropTypes.object.isRequired,
  onEditWord: PropTypes.func.isRequired
}

export default EditWord;
