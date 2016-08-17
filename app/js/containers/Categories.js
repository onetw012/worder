import {connect} from 'react-redux';
import Categories from '../components/Categories';

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.categories
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

const CategoriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories)

export default CategoriesContainer;
