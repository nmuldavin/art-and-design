import React from 'react';
import classNames from 'classnames';
import { number, bool } from 'prop-types';
import { Link } from 'react-router-dom';

import { profilesByIssueNumber } from '../../../profiles';
import LeftCaret from './LeftCaret';
import RightCaret from './RightCaret';

import styles from './BottomNav.css';

const propTypes = {
  toIssueNumber: number.isRequired,
  right: bool,
  left: bool,
};

const defaultProps = {
  right: false,
  left: false,
};

const NavLink = ({ toIssueNumber, right, left }) => {
  const { name, title } = profilesByIssueNumber[toIssueNumber];

  return (
    <Link
      to={`/profiles/${toIssueNumber}`}
      className={classNames(styles.navLink, {
        [styles.right]: right,
        [styles.left]: left,
      })}
    >
      {left && <LeftCaret />}
      <div className={styles.navLinkInner}>
        <h2>{name}</h2>
        <div>{title}</div>
      </div>
      {right && <RightCaret />}
    </Link>
  );
};

NavLink.propTypes = propTypes;
NavLink.defaultProps = defaultProps;

export default NavLink;
