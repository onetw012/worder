import {connect} from 'react-redux';

import EditCategory from '../components/EditCategory';

const mapStateToProps = (state, ownProps) => {
  let categoryId = ownProps.params.categoryId;
  return {
    categoryById: state.categories.find((category) => category.id == categoryId),
    wordsList: state.words.filter((word) => word.categoryId == categoryId)
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

const EditCategoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCategory)

export default EditCategoryContainer;
