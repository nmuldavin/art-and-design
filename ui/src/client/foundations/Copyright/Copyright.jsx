import React from 'react';

import styles from './Copyright.css';

const Copyright = () => (
  <div className={styles.copyright}>
    <a className={styles.link} href="mailto:hello@artanddesign.io">
      hello@artanddesign.io
    </a>
    <div>
      © 2018 Visual content belongs to the contributors and may not be
      reproduced without explicit permission
    </div>
  </div>
);

export default Copyright;
