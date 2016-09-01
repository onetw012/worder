import {connect} from 'react-redux';

import EditWordReduxForm from '../forms/EditWord';

const mapStateToProps = (state, ownProps) => {
  return {onEditWord: ownProps.onEditWord, initialValues: ownProps.currentWord, categoryList: ownProps.categoryList};
}

const EditWordContainer = connect(mapStateToProps)(EditWordReduxForm);

export default EditWordContainer;
