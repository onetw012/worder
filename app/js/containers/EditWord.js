import {connect} from 'react-redux';

import EditWord from '../components/EditWord';

const mapStateToProps = (state, ownProps) => {
  let wordId = ownProps.params.wordId;
  return {
    ...ownProps,
    currentWord: state.words.find((word) => word.id == wordId)
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onEditWord: (data) => {
      console.log(data);
      debugger;
    }
  };
}

const EditWordContainer = connect(mapStateToProps, mapDispatchToProps)(EditWord);

export default EditWordContainer;
