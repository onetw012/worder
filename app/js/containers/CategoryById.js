import {connect} from 'react-redux';

import CategoryById from '../components/CategoryById';

const mapStateToProps = (state, ownProps) => {
  return {
    categoryById: state.categories.find((category) => category.id == ownProps.params.categoryId)
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

const CategoryByIdContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryById)

export default CategoryByIdContainer;
