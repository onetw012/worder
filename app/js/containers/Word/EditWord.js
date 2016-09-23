import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

import {editWord} from '../../actions';
import EditWord from '../../components/Word/EditWord';

const mapStateToProps = (state, ownProps) => {
  let wordId = ownProps.params.wordId;
  return {
    ...ownProps,
    editedWord: state.words.find((word) => String(word.id) === String(wordId)),
    categoryList: state.categories
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const categoryId = ownProps.params.categoryId;
  const wordId = parseInt(ownProps.params.wordId, 10);
  return {
    onEditWord: (data) => {
      dispatch(editWord({
        ...data,
        id: wordId
      }));
      browserHistory.push(`category/${categoryId}`);
    }
  };
}

const EditWordContainer = connect(mapStateToProps, mapDispatchToProps)(EditWord);

export default EditWordContainer;
