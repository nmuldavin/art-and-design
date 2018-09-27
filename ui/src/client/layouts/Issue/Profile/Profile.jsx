import React from 'react';
import { string, arrayOf, shape } from 'prop-types';
import { map } from 'ramda';

import IconLink from './IconLink';

import styles from './Profile.css';

const propTypes = {
  name: string.isRequired,
  profileImage: string.isRequired,
  description: string.isRequired,
  socialIcons: arrayOf(
    shape({
      type: string,
      linksTo: string,
    }),
  ).isRequired,
};

const Profile = ({ name, profileImage, description, socialIcons }) => (
  <div className={styles.profile}>
    <div className={styles.profileInner}>
      <div className={styles.contentGroup}>
        <div className={styles.nameImageGroup}>
          <img className={styles.profileImage} src={profileImage} alt={name} />
          <h2 className={styles.name}>{name}</h2>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.icons}>{map(IconLink, socialIcons)}</div>
      </div>
    </div>
  </div>
);

Profile.propTypes = propTypes;

export default Profile;
