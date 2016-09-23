import React, {PropTypes} from 'react';
import {Link, browserHistory} from 'react-router';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton'
import IcoArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import IcoContentAdd from 'material-ui/svg-icons/content/add';

import WordsList from './WordsList';
import CategoryInputTextContainer from '../containers/Category/CategoryInputText';
import TopTitle from './TopTitle';

const CategoryById = ({categoryById, wordsList, onRemove}) => (
  <div>
    <TopTitle title="Edit category:" backUrl={'/categories'}/>
    <FlatButton label="Remove" secondary type="button" onClick={() => {
      onRemove();
      browserHistory.push('categories');
    }}/>
    <div>
      <CategoryInputTextContainer id={categoryById.id} type="CATEGORY_NAME" defaultValue={categoryById.name} fullWidth={true}/>
      <WordsList wordsList={wordsList}/>
      <FloatingActionButton className="bar-right" mini={true} onClick={() => {
        browserHistory.push('category/' + categoryById.id + '/word')
      }}>
        <IcoContentAdd/>
      </FloatingActionButton>
    </div>
  </div>
);

CategoryById.propTypes = {
  categoryById: PropTypes.object.isRequired,
  wordsList: PropTypes.array.isRequired
}

export default CategoryById;
