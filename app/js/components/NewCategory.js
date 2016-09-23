import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import TextField from 'material-ui/TextField';
import IcoArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import IcoContentAdd from 'material-ui/svg-icons/content/add';
import Subheader from 'material-ui/Subheader';

import BackButton from './BackButton';
import NewCategoryInputText from '../containers/Category/NewCategoryInputText';
import NewCategoryButton from '../containers/Category/NewCategoryButton';
import TopTitle from './TopTitle';

const NewCategory = () => (
  <div className="newcategory-wrap">
    <TopTitle title="New category:" backUrl={'/categories'}/>
    <NewCategoryInputText type="SET_NAME"/>
    <NewCategoryButton type="NEW_CATEGORY" icon={< IcoContentAdd />}/>
  </div>
)

export default NewCategory;
