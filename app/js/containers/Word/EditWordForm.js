import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

import {removeWord} from '../../actions';
import EditWordReduxForm from '../../forms/EditWord';

const mapStateToProps = (state, ownProps) => ({
  	onEditWord: ownProps.onEditWord,
  	initialValues: ownProps.editedWord,
  	categoryList: ownProps.categoryList
});

const mapDispatchToProps = (dispatch, ownProps) => {
	const categoryId = ownProps.editedWord.categoryId;
	return {
		onRemove: (wordId) => {
		  dispatch(removeWord(wordId));
		  browserHistory.push(`category/${categoryId}`);
		}
	};
}

const EditWordContainer = connect(mapStateToProps, mapDispatchToProps)(EditWordReduxForm);

export default EditWordContainer;
