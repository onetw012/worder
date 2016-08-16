import {
  connect
} from 'react-redux';
import { toggleTodo } from '../actions';
import Menu from '../components/Menu';

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  let currentPath = state.routing.locationBeforeTransitions.pathname;
  return {
    secectedIndex: ((currentPath) => {
      switch (currentPath) {
        case 'worder':
          return 0
          break;
        case 'lists':
          return 1
          break;
        case 'settings':
          return 2
          break;
        default:
          return 0
      }
    })(currentPath)
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleChange: (id) => {
      dispatch(handleChange(id))
    }
  };
}

const MenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)

export default MenuContainer;
