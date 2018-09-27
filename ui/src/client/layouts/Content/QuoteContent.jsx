import React from 'react';

import Quote from '../../elements/Quote';
import styles from './Content.css';

const QuoteContent = ({ ...props }) => (
  <Quote className={styles.quote} {...props} />
);

export default QuoteContent;
