import React from 'react';
import { string } from 'prop-types';

import SocialIcon from '../../../icons/social';
import styles from './Profile.css';

const propTypes = {
  type: string.isRequired,
  linksTo: string.isRequired,
};

const IconLink = ({ type, linksTo }) => (
  <a href={linksTo} key={linksTo}>
    <SocialIcon type={type} className={styles.icon} />
  </a>
);

IconLink.propTypes = propTypes;

export default IconLink;
