import React, { PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import IcoArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

const CategoryById = ({categoryById}) => (
  <div>
    <Link to="categories">
      <IcoArrowBack />
    </Link>
    <div>
      <TextField
        hintText="Category name"
        defaultValue={categoryById.name}
        floatingLabelText="Category name"
        fullWidth={true} />
      <RaisedButton
        label="Add word"
        primary={true}
        onClick={ () => {browserHistory.push('category/' + categoryById.id + '/word')} } />
    </div>
  </div>
);

CategoryById.propTypes = {
  categoryById: PropTypes.object,
}

export default CategoryById;
