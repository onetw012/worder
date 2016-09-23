import React, {PropTypes} from 'react';
import {Field} from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton';

import validate from '../../forms/validate';
import renderTextField from '../renderTextField';

const requiredFields = ['title', 'translation'];

//More detail see http://redux-form.com/6.0.1/examples/material-ui
const NewWordForm = ({handleSubmit, pristine, submitting}) => (
  <form onSubmit={handleSubmit}>
    <Field name="title" component={renderTextField} label="Title" placeholder="Title" required/>
    <Field name="translation" component={renderTextField} label="Translation" placeholder="Translation" required/>
    <Field name="description" component={renderTextField} label="Description" placeholder=""/>
    <RaisedButton label="Add word" disabled={pristine || submitting} primary type="submit" onClick={() => {}}/>
  </form>
)

NewWordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default NewWordForm;
