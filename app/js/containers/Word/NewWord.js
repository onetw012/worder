import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {browserHistory} from 'react-router';

import {newWord} from '../../actions';
import NewWord from '../../components/Word/NewWord';

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps
  };
}

const mapDispatchToProps = (dispatch, ownProps, dispatchProps) => {
  return {
    onSubmitForm: (data) => {
      dispatch(newWord(data));
    }
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const categoryId = parseInt(stateProps.params.categoryId, 10);
  return {
    ...stateProps,
    onSubmitForm: (formData) => {
      dispatchProps.onSubmitForm({
        ...formData,
        categoryId
      });
      browserHistory.push(`category/${categoryId}`);
    }
  }
}

const NewWordComponent = connect(mapStateToProps, mapDispatchToProps, mergeProps)(NewWord)

export default NewWordComponent;
