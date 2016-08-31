import React, {PropTypes} from 'react';
import Subheader from 'material-ui/Subheader';

import BackButton from './BackButton';
import NewWordReduxForm from '../forms/NewWord';

const NewWord = ({onSubmitForm, params}) => (
  <div>
    <BackButton to={"/category/" + params.categoryId}/>
    <Subheader>New word:</Subheader>
    <NewWordReduxForm onSubmit={onSubmitForm}/>
  </div>
)

NewWord.propTypes = {
  params: PropTypes.object.isRequired,
  onSubmitForm: PropTypes.func.isRequired
}

export default NewWord;
