import React, {
  PropTypes
} from 'react';
import {
  connect
} from 'react-redux';

import {
  newCategory
} from '../actions';

import RaisedButton from '../components/RaisedButton';

const mapStateToProps = (state, ownProps) => {
  let label, primary, icon, disabled, stateNewCategory;

  primary = ownProps.primary || false;
  disabled = ownProps.disabled;
  icon = ownProps.icon;
  stateNewCategory = state.newCategory;

  switch (ownProps.type) {
    case 'NEW_CATEGORY':
      {
        label = 'Add category';
        primary = true;
        break;
      }
  }
  return {
    label,
    primary,
    icon,
    disabled,
    stateNewCategory
  };
}

const mapDispatchToProps = (dispatch, ownProps, dispatchProps) => {
  let fn;
  switch (ownProps.type) {
    case 'NEW_CATEGORY':
      {
        fn = newCategory;
        break;
      }
  }
  return {
    onClick: (value) => {
      dispatch(fn(value));
    }
  }
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    label: stateProps.label,
    primary: stateProps.primary,
    icon: stateProps.icon,
    disabled: stateProps.stateNewCategory.name == '',
    onClick: () => {
      dispatchProps.onClick(stateProps.stateNewCategory);
    },
  }
}


const NewCategoryButton = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(RaisedButton);


export default NewCategoryButton;
