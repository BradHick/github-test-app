import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

// Components
import Home from './scenes/home';
import Repository from './scenes/repository';
import CommitList from './scenes/commit';

export const history = require('history').createBrowserHistory();

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route
        path='/'
        exact={true}
        component={Home}
      />
      <Route
        path='/commits-list/:username/:repos'
        exact={true}
        component={CommitList}
      />
      <Route
        path='/:username'
        exact={true}
        component={Repository}
      />
    </Switch>
  </Router>
);

export default Routes;