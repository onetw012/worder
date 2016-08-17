import {
  connect
} from 'react-redux';
import { setCurrentTab } from '../actions';
import Menu from '../components/Menu';

const mapStateToProps = (state, ownProps) => {
  return {
    currentTab: state.menu.currentTab
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setCurrentTab: (id) => {
      dispatch(setCurrentTab(id))
    }
  };
}

const MenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)

export default MenuContainer;
