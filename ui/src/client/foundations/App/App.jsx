import React from 'react';
import { hot } from 'react-hot-loader'; // this should only be done in the top level App component
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { map } from 'ramda';

import Home from '../Home';
import NotFound from '../NotFound';
import SiteHeader from '../SiteHeader';
import Copyright from '../Copyright';

import Example from '../../profiles/Example';
import profiles from '../../profiles';

import styles from './App.css';

const App = () => (
  <Router>
    <div className={styles.app}>
      <div className={styles.appContent}>
        <SiteHeader />
        <Switch>
          <Route exact path="/" component={Home} />
          {map(
            ({ issueNumber }) => (
              <Route exact path={`profiles/${issueNumber}`} />
            ),
            profiles,
          )}
          <Route exact path="/profiles/1" component={Example} />
          <Route component={NotFound} />
        </Switch>
        <Copyright />
      </div>
    </div>
  </Router>
);

export default hot(module)(App);
