import {connect} from 'react-redux';

import EditCategory from '../../components/EditCategory';
import {removeCategory, removeWordsByCategoryId, nullWordIndex} from '../../actions';

const mapStateToProps = (state, ownProps) => {
  let categoryId = ownProps.params.categoryId;
  return {
    categoryById: state.categories.find((category) => category.id == categoryId),
    wordsList: state.words.filter((word) => word.categoryId == categoryId)
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  	onRemove: () => {
  		const categoryId = ownProps.params.categoryId;
  		dispatch(removeCategory(categoryId));
  		dispatch(removeWordsByCategoryId(categoryId));
  		dispatch(nullWordIndex());
  	}
  };
}

const EditCategoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCategory)

export default EditCategoryContainer;
