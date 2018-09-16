import React from 'react';
import { node, string } from 'prop-types';
import classNames from 'classnames';

import styles from './SvgIcon.css';

const SvgIcon = ({ children, viewBox, className, ...props }) => (
  <svg
    viewBox={viewBox}
    className={classNames(styles.svgIcon, className)}
    {...props}
  >
    {children}
  </svg>
);

SvgIcon.propTypes = {
  children: node.isRequired,
  viewBox: string,
  className: string,
};

SvgIcon.defaultProps = {
  viewBox: '0 0 20 20',
  className: '',
};

export default SvgIcon;
