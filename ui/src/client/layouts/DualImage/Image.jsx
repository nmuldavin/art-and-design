import React from 'react';
import { string } from 'prop-types';

import styles from './DualImage.css';

const propTypes = {
  src: string.isRequired,
  alt: string.isRequired,
};

const Image = ({ src, alt }) => (
  <div className={styles.image}>
    <img src={src} alt={alt} className={styles.imageElement} />
  </div>
);

Image.propTypes = propTypes;

export default Image;
