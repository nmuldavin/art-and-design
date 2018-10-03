import React from 'react';
import { number, string, instanceOf } from 'prop-types';
import classNames from 'classnames';

import formatDate from '../../methods/formatDate';
import formatNumber from '../../methods/formatNumber';
import Icon from '../../icons/standard';

import styles from './IssueCard.css';

const propTypes = {
  issueNumber: number.isRequired,
  name: string.isRequired,
  date: instanceOf(Date).isRequired,
  discipline: string.isRequired,
  icon: string.isRequired,
  className: string,
};

const defaultProps = {
  className: '',
};

const formatIssueNumber = num =>
  formatNumber(num, { useGrouping: false, minimumIntegerDigits: 3 });

const formatIssueDate = date =>
  formatDate(date, { year: 'numeric', month: 'short', day: 'numeric' });

const IssueCard = ({
  issueNumber,
  name,
  date,
  discipline,
  icon,
  className,
}) => (
  <div className={classNames(styles.issueCard, className)}>
    <div className={styles.issueContainer}>
      <div className={classNames(styles.row, styles.top)}>
        <h2 className={classNames(styles.left, styles.number)}>
          {formatIssueNumber(issueNumber)}
        </h2>
        <h4 className={classNames(styles.right, styles.name)}>{name}</h4>
      </div>
      <div className={classNames(styles.row, styles.bottom)}>
        <div className={classNames(styles.left, styles.date)}>
          {formatIssueDate(date)}
        </div>
        <div className={classNames(styles.right, styles.disciplineGroup)}>
          <div className={styles.discipline}>{discipline}</div>
          <Icon type={icon} />
        </div>
      </div>
    </div>
  </div>
);

IssueCard.propTypes = propTypes;
IssueCard.defaultProps = defaultProps;

export default IssueCard;
