import React, { PropTypes } from 'react';
import {Link} from 'react-router';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import IcoArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import IcoContentAdd from 'material-ui/svg-icons/content/add';
import Subheader from 'material-ui/Subheader';

import BackButton from './BackButton';

const NewCategory = () => (
  <div className="newcategory-wrap">
    <BackButton
      to="/categories" />
    <Subheader>New category:</Subheader>
    <TextField
      hintText="Name category"
      floatingLabelText="Name category"
    />
    <RaisedButton
      label="Add category"
      primary={true}
      icon={<IcoContentAdd />} />
  </div>
)

export default NewCategory;
