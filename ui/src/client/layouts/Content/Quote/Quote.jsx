import React from 'react';
import classNames from 'classnames';
import { string } from 'prop-types';

import styles from './Quote.css';
import contextualStyles from '../Content.css';

const propTypes = {
  credit: string.isRequired,
  children: string.isRequired,
};

const Quote = ({ credit, children }) => (
  <div className={classNames(styles.quote, contextualStyles.sideFloat)}>
    <h3 className={styles.text}>“{children}”</h3>
    <div className={styles.credit}>— {credit}</div>
  </div>
);

Quote.propTypes = propTypes;

export default Quote;
