import React from 'react';
import { hot } from 'react-hot-loader'; // this should only be done in the top level App component

import SiteHeader from '../SiteHeader';

import styles from './App.css';

const App = () => (
  <div className={styles.app}>
    <SiteHeader />
  </div>
);

export default hot(module)(App);
