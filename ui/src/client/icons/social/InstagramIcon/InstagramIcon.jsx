import React from 'react';

import SocialSvgIcon from '../SocialSvgIcon';
import styles from './InstagramIcon.css';

const InstagramIcon = props => (
  <SocialSvgIcon {...props}>
    <rect x="1" y="1" width="28" height="28" rx="8" />
    <circle cx="15" cy="15" r="7" />
    <circle className={styles.flash} cx="23.5" cy="6.5" r="1.5" />
  </SocialSvgIcon>
);

export default InstagramIcon;
