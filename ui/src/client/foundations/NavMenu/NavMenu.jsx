import classNames from 'classnames';
import React from 'react';
import { string } from 'prop-types';
import styles from './NavMenu.css';

const propTypes = {
  className: string,
};

const defaultProps = {
  className: '',
};

const NavMenu = ({ className }) => (
  <div className={classNames(styles.navMenu, className)}>
    <div className={classNames(styles.bar, styles.top)} />
    <div className={classNames(styles.bar, styles.mid)} />
    <div className={classNames(styles.bar, styles.bottom)} />
  </div>
);

NavMenu.propTypes = propTypes;
NavMenu.defaultProps = defaultProps;

export default NavMenu;
