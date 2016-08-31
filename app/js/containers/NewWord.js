import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';

import NewWord from '../components/NewWord';

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps
  };
}

const mapDispatchToProps = (dispatch, ownProps, dispatchProps) => {
  return {
    onSubmitForm: (data, value) => {
      debugger;
    }
  }
}

const NewWordComponent = connect(mapStateToProps, mapDispatchToProps)(NewWord)

export default NewWordComponent;
