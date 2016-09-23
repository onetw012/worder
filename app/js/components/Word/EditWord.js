import React, {PropTypes} from 'react';
import Subheader from 'material-ui/Subheader';

import EditWordFormContainer from '../../containers/Word/EditWordForm';
import TopTitle from '../TopTitle';

const EditWord = ({params, onEditWord, editedWord, categoryList}) => (
  <div>
    <TopTitle title="Edit word:" backUrl={'category/' + params.categoryId}/>
    <EditWordFormContainer onSubmit={onEditWord} editedWord={editedWord} categoryList={categoryList}/>
  </div>
)

EditWord.propTypes = {
  editedWord: PropTypes.object.isRequired,
  categoryList: PropTypes.array.isRequired,
  params: PropTypes.object.isRequired,
  onEditWord: PropTypes.func.isRequired
}

export default EditWord;
