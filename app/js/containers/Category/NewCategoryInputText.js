import React, {
  PropTypes
} from 'react';
import {
  connect
} from 'react-redux';
import {
  setNewCategoryName
} from '../../actions';
import InputText from '../../components/InputText';

const mapStateToProps = (state, ownProps) => {
  let hintText, defaultValue, floatingLabelText, fullWidth;

  fullWidth = ownProps.fullWidth || false;

  switch (ownProps.type) {
    case 'SET_NAME':
      {
        hintText = 'Name of new category';
        floatingLabelText = 'Name';
        defaultValue = state.newCategory.name;
        break;
      }
  }
  return {
    hintText,
    defaultValue,
    floatingLabelText,
    fullWidth
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  let fn;
  switch (ownProps.type) {
    case 'SET_NAME':
      {
        fn = setNewCategoryName;
        break;
      }
  }
  return {
    onChange: (value) => {
      dispatch(fn(value));
    }
  }
};


const CategoryInputText = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputText);


export default CategoryInputText;
