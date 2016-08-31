import React from 'react';
import SelectField from 'material-ui/SelectField';

const renderSelectField = ({ input, label, children, meta: { touched, error } }) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}/>
)


export default renderSelectField;
