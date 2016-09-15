import React, {PropTypes} from 'react';
import Subheader from 'material-ui/Subheader';

import BackButton from './BackButton';

const TopTitle = ({title, backUrl}) => (
  <div className="top-title-group">
    <BackButton to={backUrl} />
    <div className="top-title-box">
      <Subheader>{title}</Subheader>
    </div>
  </div>
)

TopTitle.propTypes = {
  backUrl: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default TopTitle;
