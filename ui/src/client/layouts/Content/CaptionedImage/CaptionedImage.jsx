import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';

import styles from './CaptionedImage.css';
import contextualStyles from '../Content.css';

const propTypes = {
  src: string.isRequired,
  alt: string.isRequired,
  title: string.isRequired,
  subtitle: string.isRequired,
};

const CaptionedImage = ({ src, alt, title, subtitle }) => (
  <div
    className={classNames(styles.captionedImage, contextualStyles.sideFloat)}
  >
    <img src={src} alt={alt} className={styles.image} />
    <div className={styles.divider} />
    <div className={styles.caption}>
      <h5 className={styles.title}>{title}</h5>
      <div className={styles.subtitle}>{subtitle}</div>
    </div>
  </div>
);

CaptionedImage.propTypes = propTypes;
// CaptionedImage.defaultProps = defaultProps;

export default CaptionedImage;
