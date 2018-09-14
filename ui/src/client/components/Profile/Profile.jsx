import React from 'react';
import { number, string, node, instanceOf } from 'prop-types';
import classNames from 'classnames';

import formatDate from '../../methods/formatDate';
import formatNumber from '../../methods/formatNumber';

import styles from './Profile.css';

const propTypes = {
  issueNumber: number.isRequired,
  name: string.isRequired,
  date: instanceOf(Date).isRequired,
  discipline: string.isRequired,
  icon: node.isRequired,
};

const formatIssueNumber = num =>
  formatNumber(num, { useGrouping: false, minimumIntegerDigits: 3 });

const formatIssueDate = date =>
  formatDate(date, { year: 'numeric', month: 'short', day: 'numeric' });

const ProfileCard = ({ issueNumber, name, date, discipline, icon }) => (
  <div className={styles.profile}>
    <div className={styles.profileContainer}>
      <div className={classNames(styles.row, styles.top)}>
        <h2 className={classNames(styles.column, styles.left, styles.number)}>
          {formatIssueNumber(issueNumber)}
        </h2>
        <h4 className={classNames(styles.column, styles.right, styles.name)}>
          {name}
        </h4>
      </div>
      <div className={classNames(styles.row, styles.bottom)}>
        <div className={classNames(styles.column, styles.left, styles.date)}>
          {formatIssueDate(date)}
        </div>
        <div
          className={classNames(
            styles.column,
            styles.right,
            styles.disciplineGroup,
          )}
        >
          <div className={styles.discipline}>{discipline}</div>
          {icon}
        </div>
      </div>
    </div>
  </div>
);

ProfileCard.propTypes = propTypes;

export default ProfileCard;
