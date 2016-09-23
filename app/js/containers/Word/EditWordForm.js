import {connect} from 'react-redux';

import {removeWord} from '../../actions';
import EditWordReduxForm from '../../forms/EditWord';

const mapStateToProps = (state, ownProps) => {
  return {onEditWord: ownProps.onEditWord, initialValues: ownProps.currentWord, categoryList: ownProps.categoryList};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRemove: (wordId) => {
      dispatch(removeWord(wordId));
    }
  };
}

const EditWordContainer = connect(mapStateToProps, mapDispatchToProps)(EditWordReduxForm);

export default EditWordContainer;
