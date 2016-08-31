import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton';

import validate from './validate';
import renderTextField from './renderTextField';
import renderSelectField from './renderSelectField';

const requiredFields = ['title', 'translation', 'categoryId'];

//More detail see http://redux-form.com/6.0.1/examples/material-ui
const EditWordForm = ({handleSubmit, pristine, reset, submitting}) => (
  <form onSubmit={handleSubmit}>
    <Field name="title" component={renderTextField} label="Title" placeholder="Title" required />
    <Field name="translation" component={renderTextField} label="Translation" placeholder="Translation" required />
    <Field name="categoryId" component={renderSelectField} label="Favorite Color">
      <MenuItem value={'ff0000'} primaryText="Red"/>
      <MenuItem value={'00ff00'} primaryText="Green"/>
      <MenuItem value={'0000ff'} primaryText="Blue"/>
    </Field>
    <Field name="description" component={renderTextField} label="Description" placeholder=""/>
    <RaisedButton label="Add word" disabled={pristine || submitting} primary type="submit" onClick={() => {}}/>
  </form>
)

const EditWordReduxForm = reduxForm({
  validate: validate(requiredFields),
  form: 'contact',
  fields: ['title', 'translation', 'description', 'categoryId']
})(EditWordForm)

const mapStateToProps = (state, ownProps) => {
  return {
    onEditWord: ownProps.onEditWord,
    initialValues: ownProps.currentWord
  };
}

const EditWordContainer = connect(mapStateToProps)(EditWordReduxForm);

export default EditWordContainer;
