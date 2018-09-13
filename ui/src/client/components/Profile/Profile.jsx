import React from 'react';
import { number, string, node } from 'prop-types';
import classNames from 'classnames';

import styles from './Profile.css';

const propTypes = {
  issueNumber: number.isRequired,
  name: string.isRequired,
  date: string.isRequired, // TODO: use date?
  discipline: string.isRequired,
  icon: node.isRequired,
};

const ProfileCard = ({ issueNumber, name, date, discipline, icon }) => (
  <div className={styles.profile}>
    <div className={styles.profileContainer}>
      <div className={classNames(styles.row, styles.top)}>
        <h2 className={classNames(styles.column, styles.left, styles.number)}>
          {issueNumber}
        </h2>
        <h4 className={classNames(styles.column, styles.right, styles.name)}>
          {name}
        </h4>
      </div>
      <div className={classNames(styles.row, styles.bottom)}>
        <div className={classNames(styles.column, styles.left, styles.date)}>
          {date}
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
