import React from 'react';
import { node } from 'prop-types';

import styles from './DualImage.css';

const propTypes = {
  children: node.isRequired,
};

// const defaultProps = {
//   children: '',
// };

const DualImage = ({ children }) => (
  <div className={styles.dualImage}>{children}</div>
);

DualImage.propTypes = propTypes;
// DualImage.defaultProps = defaultProps;

export default DualImage;
