import React, {PropTypes} from 'react';
import Subheader from 'material-ui/Subheader';

import BackButton from '../BackButton';
import TopTitle from '../TopTitle';
import NewWordReduxForm from '../../forms/NewWord';

const NewWord = ({onSubmitForm, params}) => (
  <div>
    <TopTitle title="New word:" backUrl={"/category/" + params.categoryId}/>
    <NewWordReduxForm onSubmit={onSubmitForm}/>
  </div>
)

NewWord.propTypes = {
  params: PropTypes.object.isRequired,
  onSubmitForm: PropTypes.func.isRequired
}

export default NewWord;
