import React, {PropTypes} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import ChangeWordButtons from './ChangeWordButtons';

const Word = ({title, translation, description, showTranslation, showDescription}) => (
  <div className="word-wrap">
    <Card>
      <CardHeader
        title={title}
        subtitle={translation}
        actAsExpander={showDescription}
        showExpandableButton={showDescription}/>
      <CardText expandable>
        {description}
      </CardText>
      <CardActions>
        <ChangeWordButtons/>
      </CardActions>
    </Card>

  </div>
);

Word.propTypes = {
  showTranslation: PropTypes.bool.isRequired,
  showDescription: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  translation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Word;
