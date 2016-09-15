import React from 'react';
import TextField from 'material-ui/TextField';


const renderTextField = ({ input, label, placeholder, startValue, meta: { touched, error }, ...custom }) => (
  <div className="render-text-field">
    <TextField
      hintText={placeholder}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
  </div>
)

export default renderTextField;
