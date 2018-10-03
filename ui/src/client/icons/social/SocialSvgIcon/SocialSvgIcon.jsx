import React from 'react';
import { node, string } from 'prop-types';
import classNames from 'classnames';

import styles from './SocialSvgIcon.css';

const SocialSvgIcon = ({ children, viewBox, className, ...props }) => (
  <svg
    viewBox={viewBox}
    className={classNames(styles.socialSvgIcon, className)}
    {...props}
  >
    {children}
  </svg>
);

SocialSvgIcon.propTypes = {
  children: node.isRequired,
  viewBox: string,
  className: string,
};

SocialSvgIcon.defaultProps = {
  viewBox: '0 0 30 30',
  className: '',
};

export default SocialSvgIcon;
