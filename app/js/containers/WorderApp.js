import {connect} from 'react-redux';
import WorderApp from '../components/WorderApp';

const mapStateToProps = (state, ownProps) => {
  return state;
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

const WorderAppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WorderApp)

export default WorderAppContainer;
