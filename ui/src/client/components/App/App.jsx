import React from 'react';
import { hot } from 'react-hot-loader'; // this should only be done in the top level App component
import { Button } from '@omaka/hoahoa';
import styles from './App.css';

const App = () => (
  <div className={styles.app}>
    <Button>hi</Button>
  </div>
);

export default hot(module)(App);
