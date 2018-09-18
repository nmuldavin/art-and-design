import React from 'react';

import SocialIcon from '../../icons/social';
import profile from './profile.jpg';

import styles from './Profile.css';

const Profile = () => (
  <div className={styles.profile}>
    <div className={styles.profileInner}>
      <div className={styles.contentGroup}>
        <div className={styles.nameImageGroup}>
          <img
            className={styles.profileImage}
            src={profile}
            alt="Eric Herrmann"
          />
          <h1 className={styles.name}>Eric Herrmann</h1>
        </div>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipising elit, sed do euismod
          tempor incididunt ut labore et dolore magna aliqua ut enim ad minim
          veniam.
        </p>
        <div className={styles.icons}>
          <SocialIcon type="instagram" className={styles.icon} />
          <SocialIcon type="facebook" className={styles.icon} />
          <SocialIcon type="web" className={styles.icon} />
          <SocialIcon type="twitter" className={styles.icon} />
          <SocialIcon type="snapchat" className={styles.icon} />
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
