import React from 'react';

import styles from './SiteHeader.css';
import SiteLogo from '../SiteLogo';
import NavMenu from '../NavMenu';

const SiteHeader = () => (
  <div className={styles.siteHeader}>
    <NavMenu className={styles.navMenu} />
    <SiteLogo className={styles.siteLogo} />
  </div>
);

export default SiteHeader;
