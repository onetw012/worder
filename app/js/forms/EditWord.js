import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';

import EditWordForm from '../components/EditWordForm';
import validate from './validate';

const requiredFields = ['title', 'translation', 'categoryId'];

const EditWordReduxForm = reduxForm({
  validate: validate(requiredFields),
  form: 'contact',
  fields: ['title', 'translation', 'description', 'categoryId']
})(EditWordForm);

export default EditWordReduxForm;
