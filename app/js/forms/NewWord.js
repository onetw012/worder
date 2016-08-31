import React from 'react';
import {Field, reduxForm} from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton';

import validate from './validate';
import renderTextField from './renderTextField';

const requiredFields = ['title', 'translation'];

//More detail see http://redux-form.com/6.0.1/examples/material-ui
const NewWordForm = ({handleSubmit, pristine, reset, submitting}) => (
  <form onSubmit={handleSubmit}>
    <Field name="title" component={renderTextField} label="Title" placeholder="Title" required/>
    <Field name="translation" component={renderTextField} label="Translation" placeholder="Translation" required/>
    <Field name="description" component={renderTextField} label="Description" placeholder=""/>
    <RaisedButton label="Add word" disabled={pristine || submitting} primary type="submit" onClick={() => {}}/>
  </form>
)

const NewWordReduxForm = reduxForm({
  validate: validate(requiredFields),
  form: 'contact',
  fields: ['title', 'translation', 'description', 'categoryId']
})(NewWordForm)

export default NewWordReduxForm;
