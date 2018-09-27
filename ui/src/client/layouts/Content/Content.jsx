import React from 'react';

import styles from './Content.css';

const Content = ({ title, children }) => (
  <div className={styles.content}>
    <h1 className={styles.title}>{title}</h1>
    <div className={styles.contentInner}>{children}</div>
  </div>
);

export default Content;
