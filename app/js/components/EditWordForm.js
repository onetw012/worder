import React, {PropTypes} from 'react';
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton';
import {Field} from 'redux-form';

import validate from '../forms/validate';
import renderTextField from './renderTextField';
import renderSelectField from './renderSelectField';

const EditWordForm = ({handleSubmit, pristine, submitting}) => (
  <form onSubmit={handleSubmit}>
    <Field name="title" component={renderTextField} label="Title" placeholder="Title" required/>
    <Field name="translation" component={renderTextField} label="Translation" placeholder="Translation" required/>
    <Field name="categoryId" component={renderSelectField} label="Favorite Color">
      <MenuItem value={'ff0000'} primaryText="Red"/>
      <MenuItem value={'00ff00'} primaryText="Green"/>
      <MenuItem value={'0000ff'} primaryText="Blue"/>
    </Field>
    <Field name="description" component={renderTextField} label="Description" placeholder=""/>
    <RaisedButton label="Add word" disabled={pristine || submitting} primary type="submit" onClick={() => {}}/>
  </form>
)

EditWordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default EditWordForm;
