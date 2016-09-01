import React from 'react';
import {reduxForm} from 'redux-form'

import validate from './validate';
import NewWordFormComponent from '../components/NewWordForm';
const requiredFields = ['title', 'translation'];

const NewWordReduxForm = reduxForm({
  validate: validate(requiredFields),
  form: 'contact',
  fields: ['title', 'translation', 'description']
})(NewWordFormComponent)

export default NewWordReduxForm;
