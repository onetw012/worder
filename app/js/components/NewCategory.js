import React, { PropTypes } from 'react';
import {Link} from 'react-router';

import TextField from 'material-ui/TextField';
import IcoArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

const NewCategory = () => (
  <div className="newcategory-wrap">
    <Link to="categories">
      <IcoArrowBack />
    </Link>
    <h4>
      New category
    </h4>
    <TextField
      hintText="Name category"
      floatingLabelText="Name category"
    />
  </div>
)

export default NewCategory;
