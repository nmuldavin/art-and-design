import React from 'react';
import { number, string, instanceOf } from 'prop-types';

import ProfileCard from '../../elements/ProfileCard';

import styles from './ProfileHero.css';

const propTypes = {
  issueNumber: number.isRequired,
  name: string.isRequired,
  date: instanceOf(Date).isRequired,
  discipline: string.isRequired,
  icon: string.isRequired,
  hero: string.isRequired,
};

const ProfileHero = ({ issueNumber, name, date, discipline, icon, hero }) => (
  <div className={styles.profileHero}>
    <ProfileCard
      className={styles.profileCard}
      issueNumber={issueNumber}
      name={name}
      date={date}
      discipline={discipline}
      icon={icon}
    />
    <div className={styles.profileHeroInner}>
      <img src={hero} className={styles.heroImage} alt={name} />
    </div>
  </div>
);

ProfileHero.propTypes = propTypes;

export default ProfileHero;
