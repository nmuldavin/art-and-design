import React from 'react';
import classNames from 'classnames';
import { string } from 'prop-types';

import styles from './Quote.css';

const propTypes = {
  credit: string.isRequired,
  children: string.isRequired,
  className: string,
};

const defaultProps = {
  className: '',
};

const Quote = ({ credit, children, className }) => (
  <div className={classNames(styles.quote, className)}>
    <h3 className={styles.text}>“{children}”</h3>
    <div className={styles.credit}>— {credit}</div>
  </div>
);

Quote.propTypes = propTypes;
Quote.defaultProps = defaultProps;

export default Quote;
