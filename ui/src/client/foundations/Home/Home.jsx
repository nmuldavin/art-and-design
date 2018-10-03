import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Home.css';

const Home = () => (
  <div className={styles.home}>
    <Link to="/profiles/1">Example</Link>
  </div>
);

export default Home;
