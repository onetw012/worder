import React, {
  PropTypes
} from 'react';
import {
  connect
} from 'react-redux';
import {
  setCategoryName
} from '../actions';
import InputText from '../components/InputText';

const mapStateToProps = (state, ownProps) => {
  let hintText, defaultValue, floatingLabelText, fullWidth, id;
  const currentCategory = state.categories.find((category) => category.id == ownProps.id);

  fullWidth = ownProps.fullWidth || false;

  switch (ownProps.type) {
    case 'CATEGORY_NAME':
      {
        hintText = 'Name of category';
        floatingLabelText = 'Category name';
        defaultValue = currentCategory.name;
        break;
      }
    case 'NAME_NEW_CATEGORY':
      {
        hintText = 'Name';
        floatingLabelText = 'Name of new category';
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
    case 'CATEGORY_NAME':
      {
        fn = setCategoryName;
        break;
      }
  }
  return {
    onChange: (value) => {
      dispatch(fn(value, ownProps.id));
    }
  }
};


const CategoryInputText = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputText);


export default CategoryInputText;
