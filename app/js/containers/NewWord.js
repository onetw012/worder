import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';

import {newWord} from '../actions';
import NewWord from '../components/NewWord';

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps
  };
}

const mapDispatchToProps = (dispatch, ownProps, dispatchProps) => {
  return {
    onSubmitForm: (data) => {;
      dispatch(newWord(data));
    }
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...stateProps,
    onSubmitForm: (formData) => {
      dispatchProps.onSubmitForm({
        ...formData,
        categoryId: stateProps.params.categoryId
      });
    }
  }
}

const NewWordComponent = connect(mapStateToProps, mapDispatchToProps, mergeProps)(NewWord)

export default NewWordComponent;
