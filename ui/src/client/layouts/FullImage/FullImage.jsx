import React from 'react';
import { string } from 'prop-types';

import styles from './FullImage.css';

const propTypes = {
  src: string.isRequired,
  alt: string.isRequired,
};

const FullImage = ({ src, alt }) => (
  <div className={styles.fullImage}>
    <img src={src} alt={alt} className={styles.imageElement} />
  </div>
);

FullImage.propTypes = propTypes;

export default FullImage;
