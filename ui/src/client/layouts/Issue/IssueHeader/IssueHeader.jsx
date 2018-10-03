import React from 'react';
import { number, string, instanceOf } from 'prop-types';

import IssueCard from '../../../elements/IssueCard';

import styles from './IssueHeader.css';

const propTypes = {
  issueNumber: number.isRequired,
  name: string.isRequired,
  date: instanceOf(Date).isRequired,
  discipline: string.isRequired,
  icon: string.isRequired,
  hero: string.isRequired,
};

const IssueHeader = ({ issueNumber, name, date, discipline, icon, hero }) => (
  <div className={styles.issueHeader}>
    <IssueCard
      className={styles.issueCard}
      issueNumber={issueNumber}
      name={name}
      date={date}
      discipline={discipline}
      icon={icon}
    />
    <div className={styles.issueHeaderInner}>
      <img src={hero} className={styles.heroImage} alt={name} />
    </div>
  </div>
);

IssueHeader.propTypes = propTypes;

export default IssueHeader;
