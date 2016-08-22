import React, { PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';

import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton'
import IcoArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import IcoContentAdd from 'material-ui/svg-icons/content/add';

import WordsList from './WordsList';
import BackButton from './BackButton';
import CategoryInputTextContainer from '../containers/CategoryInputText';


const CategoryById = ({categoryById, wordsList}) => (
  <div>
    <BackButton
      to="/categories" />
    <div>
      <CategoryInputTextContainer
        id={categoryById.id}
        type="CATEGORY_NAME"
        defaultValue={categoryById.name}
        fullWidth={true} />
      <WordsList
        wordsList={wordsList} />
      <FloatingActionButton
        className="bar-right"
        mini={true}
        onClick={ () => {browserHistory.push('category/' + categoryById.id + '/word')} } >
        <IcoContentAdd />
      </FloatingActionButton>
    </div>
  </div>
);

CategoryById.propTypes = {
  categoryById: PropTypes.object.isRequired,
  wordsList: PropTypes.array.isRequired,
}

export default CategoryById;
