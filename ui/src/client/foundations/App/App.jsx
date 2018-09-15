import React from 'react';
import { hot } from 'react-hot-loader'; // this should only be done in the top level App component

import SiteHeader from '../SiteHeader';
import ProfileHero from '../../layouts/ProfileHero';

import styles from './App.css';

const App = () => (
  <div className={styles.app}>
    <div className={styles.appContent}>
      <SiteHeader />
      <ProfileHero />
    </div>
  </div>
);

export default hot(module)(App);
