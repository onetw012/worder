import React, { PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';

import IcoArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

const CategoryById = ({params}) => (
  <div>
    <Link to="categories">
      <IcoArrowBack />
    </Link>
    <div>
      id: {params.categoryId}
    </div>
  </div>
);

// CategoryById.propTypes = {
//   categoryById: PropTypes.object.isRequired,
// }

export default CategoryById;
