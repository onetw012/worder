import {connect} from 'react-redux';
import Content from '../components/Content.js';

const mapStateToProps = (state, ownProps) => {
  return {
    currentTab: state.menu.currentTab
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
}

const ContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content)

export default ContentContainer;
