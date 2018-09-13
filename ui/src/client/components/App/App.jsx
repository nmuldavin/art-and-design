import React from 'react';
import { hot } from 'react-hot-loader'; // this should only be done in the top level App component

import SiteHeader from '../SiteHeader';
import Profile from '../Profile';
import PhotoIcon from '../../icons/PhotoIcon';

import styles from './App.css';

const App = () => (
  <div className={styles.app}>
    <div className={styles.appContent}>
      <SiteHeader />
      <Profile
        issueNumber={1}
        name="Noah Muldavin"
        date="13 SEP, 2018"
        discipline="Existential Angst"
        icon={<PhotoIcon />}
      />
    </div>
  </div>
);

export default hot(module)(App);
