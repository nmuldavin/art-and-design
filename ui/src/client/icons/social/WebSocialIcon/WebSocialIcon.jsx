import React from 'react';

import SocialSvgIcon from '../SocialSvgIcon';
import styles from './WebSocialIcon.css';

const WebSocialIcon = props => (
  <SocialSvgIcon {...props}>
    <rect x="1" y="1" width="28" height="28" rx="8" />
    <g className={styles.inner}>
      <rect x="8" y="8" width="6" height="2" />
      <rect x="8" y="8" width="2" height="14" />
      <rect x="8" y="20" width="14" height="2" />
      <rect x="20" y="16" width="2" height="6" />
      <rect x="20" y="8" width="2" height="6" />
      <rect x="16" y="8" width="6" height="2" />
      <rect
        transform="translate(18.000000, 13.000000) rotate(-45.000000) translate(-18.000000, -13.000000) "
        x="14"
        y="12"
        width="8"
        height="2"
      />
    </g>
  </SocialSvgIcon>
);

export default WebSocialIcon;
