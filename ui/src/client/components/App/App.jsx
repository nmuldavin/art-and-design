import React from 'react';
import { hot } from 'react-hot-loader'; // this should only be done in the top level App component

import SiteHeader from '../SiteHeader';
import Profile from '../Profile';
import CameraIcon from '../../icons/CameraIcon';

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
        icon={<CameraIcon />}
      />
    </div>
  </div>
);

export default hot(module)(App);
