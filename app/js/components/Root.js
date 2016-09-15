import React, {PropTypes} from 'react';
import {Provider} from 'react-redux';
import {Router, Route, Redirect, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import '../../scss/main.scss';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import WorderAppContainer from '../containers/WorderApp';
import CategoriesContainer from '../containers/Categories';
import EditCategoryContainer from '../containers/EditCategory';
import WordContainer from '../containers/Word';
import NewCategory from './NewCategory';
import Settings from './Settings';
import NewWordContainer from '../containers/NewWord';
import EditWordContainer from '../containers/EditWord';
// import Lists from './Lists';

class Root extends React.Component {

  constructor(props) {
    super(props);
    this.store = props.store;
    this.history = syncHistoryWithStore(browserHistory, this.store);
  }

  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }

  render() {
    const store = this.store;
    return (
      <Provider store={store}>
        <Router history={this.history}>
          <Route path="/" component={WorderAppContainer}>
            <Route path="word" component={WordContainer}/>
            <Route path="category/:categoryId" component={EditCategoryContainer}/>
            <Route path="category/:categoryId/word" component={NewWordContainer}/>
            <Route path="category/:categoryId/word/:wordId" component={EditWordContainer}/>
            <Route path="categories" component={CategoriesContainer}/>
            <Route path="newCategory" component={NewCategory}/>
            <Route path="settings" component={Settings}/>
            <Redirect from="popup.html" to="/word"/>
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default Root;

Root.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
};
