import {connect} from 'react-redux';

import {editWord} from '../actions';
import EditWord from '../components/EditWord';

const mapStateToProps = (state, ownProps) => {
  let wordId = ownProps.params.wordId;
  return {
    ...ownProps,
    currentWord: state.words.find((word) => word.id == wordId),
    categoryList: state.categories
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onEditWord: (data) => {
      dispatch(editWord({
        ...data,
        id: ownProps.params.wordId
      }));
    }
  };
}

const EditWordContainer = connect(mapStateToProps, mapDispatchToProps)(EditWord);

export default EditWordContainer;
