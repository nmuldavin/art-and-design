import React from 'react';
import { string, node } from 'prop-types';

import styles from './Content.css';

const propTypes = {
  title: string,
  children: node,
};

const defaultProps = {
  title: '',
  children: null,
};

const Content = ({ title, children }) => (
  <div className={styles.content}>
    <h1 className={styles.title}>{title}</h1>
    <div className={styles.contentBelowHeader}>
      <div className={styles.contentInner}>{children}</div>
    </div>
  </div>
);

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;

export default Content;
