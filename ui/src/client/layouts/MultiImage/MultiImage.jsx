import React from 'react';
import { node } from 'prop-types';

import styles from './MultiImage.css';

const propTypes = {
  children: node.isRequired,
};

const MultiImage = ({ children }) => (
  <div className={styles.multiImage}>{children}</div>
);

MultiImage.propTypes = propTypes;

export default MultiImage;
