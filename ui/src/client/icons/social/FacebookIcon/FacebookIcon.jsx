import React from 'react';

import SocialSvgIcon from '../SocialSvgIcon';
import styles from './FacebookIcon.css';

const FacebookIcon = props => (
  <SocialSvgIcon {...props}>
    <rect x="1" y="1" width="28" height="28" rx="8" />
    <polygon
      className={styles.crossbar}
      points="12 17 21 17 20.6029718 19 12 19"
    />
    <path d="M22,9.00522924 C18.9774307,9.00522924 16,8.72406844 16,12.2850279 C16,14.6590008 16,20.2306582 16,29" />
  </SocialSvgIcon>
);

export default FacebookIcon;
