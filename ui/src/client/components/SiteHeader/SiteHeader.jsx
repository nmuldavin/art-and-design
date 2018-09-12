import React from 'react';

import styles from './SiteHeader.css';
import SiteLogo from '../SiteLogo';

const SiteHeader = () => (
  <div className={styles.siteHeader}>
    <SiteLogo className={styles.siteLogo} />
  </div>
);

export default SiteHeader;
