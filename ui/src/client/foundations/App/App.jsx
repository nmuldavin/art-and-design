import React from 'react';
import { hot } from 'react-hot-loader'; // this should only be done in the top level App component
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../Home';
import NotFound from '../NotFound';
import SiteHeader from '../SiteHeader';

import Example from '../../profiles/Example';

import styles from './App.css';

const App = () => (
  <Router>
    <div className={styles.app}>
      <div className={styles.appContent}>
        <SiteHeader />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profiles/1" component={Example} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default hot(module)(App);
