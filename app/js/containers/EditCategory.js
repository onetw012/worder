import {connect} from 'react-redux';

import EditCategory from '../components/EditCategory';

const mapStateToProps = (state, ownProps) => {
  return {
    categoryById: state.categories.find((category) => category.id == ownProps.params.categoryId)
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
