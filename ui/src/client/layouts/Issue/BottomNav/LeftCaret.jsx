import React from 'react';

import styles from './BottomNav.css';

const LeftCaret = () => (
  <svg
    viewBox="0 0 14 42"
    transform="rotate(180.000000)"
    className={styles.caret}
  >
    <rect
      transform="translate(6.866025, 10.992403) rotate(60.000000) translate(-6.866025, -10.992403)"
      x="-5.1339746"
      y="9.9924025"
      width="24"
      height="2"
    />
    <rect
      transform="translate(6.866025, 30.792207) rotate(-60.000000) translate(-6.866025, -30.792207)"
      x="-5.1339746"
      y="29.7922072"
      width="24"
      height="2"
    />
  </svg>
);

export default LeftCaret;
