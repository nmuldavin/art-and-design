import React from 'react';
import { string, number } from 'prop-types';
import classNames from 'classnames';

import NavLink from './NavLink';
import profiles from '../../../profiles';

import styles from './BottomNav.css';

const numProfiles = profiles.length;

const propTypes = {
  issueNumber: number.isRequired,
  className: string,
};

const defaultProps = {
  className: '',
};

const nextIssueNumber = issueNumber => (issueNumber % numProfiles) + 1;

const previousIssueNumber = issueNumber =>
  issueNumber > 1 ? issueNumber - 1 : numProfiles;

const BottomNav = ({ issueNumber, className }) => (
  <div className={classNames(styles.bottomNav, className)}>
    <NavLink left toIssueNumber={previousIssueNumber(issueNumber)} />
    <NavLink right toIssueNumber={nextIssueNumber(issueNumber)} />
  </div>
);

BottomNav.propTypes = propTypes;
BottomNav.defaultProps = defaultProps;

export default BottomNav;
