import classNames from 'classnames';
import React from 'react';
import { string } from 'prop-types';
import styles from './SiteLogo.css';

const propTypes = {
  className: string,
};

const defaultProps = {
  className: '',
};

const SiteLogo = ({ className }) => (
  <svg
    width="90px"
    height="41px"
    viewBox="0 0 90 41"
    className={classNames(styles.siteLogo, className)}
  >
    <path d="M12.1252325,28.3981056 C9.9900806,28.3981056 8.43211407,29.5863949 8.43211407,31.239667 C8.43211407,32.9446039 9.88592684,34.0769231 12.1252325,34.0769231 C14.7290763,34.0769231 16.9683819,32.5829506 17.1202728,29.5863949 C15.7185369,28.9147532 14.3124613,28.3981056 12.1252325,28.3981056 L12.1252325,28.3981056 Z M28,40.2250287 C27.3750775,40.5307118 25.9690019,41 24.150651,41 C21.8592684,41 19.8803472,39.9667049 18.5784253,38.1067738 C16.8642281,39.9150402 14.4686919,41 11.083695,41 C4.00557967,41 0,36.401837 0,31.4463261 C0,26.2841561 4.16181029,22.6159587 11.083695,22.6159587 C13.3750775,22.6159587 15.4060756,23.2359357 17.1202728,24.0625718 L17.1202728,23.9075775 C17.1202728,20.3986797 14.9894606,18.2761194 11.1878487,18.2761194 C7.91134532,18.2761194 6.34903906,19.7743972 5.8282703,21.2210103 C3.48481091,21.2210103 1.51022939,19.7743972 1.51022939,17.4537887 C1.51022939,13.7339265 5.2033478,11 12.1773094,11 C20.1407316,11 26.2293862,15.1805396 26.2293862,23.8559127 L26.2293862,33.6162457 C26.2293862,36.9701493 26.8022319,38.9334099 27.9479231,39.6567164 L28,40.2250287 Z" />
    <path d="M79.683221,26.2166352 C79.683221,21.6338781 76.7050052,19.1599623 72.9094917,19.1599623 C69.1096992,19.1599623 66.1357624,21.6338781 66.1357624,26.2166352 C66.1357624,30.7006076 69.1096992,33.2776032 72.9094917,33.2776032 C76.7050052,33.2776032 79.683221,30.7006076 79.683221,26.2166352 L79.683221,26.2166352 Z M90,40.2311963 C89.3838174,40.5361408 87.9974066,41 86.2002075,41 C83.8895228,41 81.9425571,39.9692018 80.6588434,38.0149801 C78.4508558,39.9692018 75.5239886,41 72.1392635,41 C64.2358662,41 57,35.3864446 57,26.2166352 C57,16.5872617 64.2872147,11.2786507 72.1392635,11.2786507 C74.8607365,11.2786507 77.2741183,11.8971297 79.2724326,13.1340876 L79.2724326,10.2478525 C79.2724326,7.15975278 78.8616442,5.71663524 77.4752334,4.78891682 L77.4752334,4.22197779 C81.0696317,4.22197779 85.6353734,1.75235701 88.3054979,0 C88.2541494,6.90205322 88.2541494,14.5772051 88.2541494,33.6383826 C88.2541494,36.9841819 88.8189834,38.9426985 89.9486515,39.6642573 L90,40.2311963 Z" />
    <path d="M55.7999878,20.8522303 L45.7913298,20.8522303 L45.7913298,12 L37.2805073,12 L37.2805073,20.8522303 L27.7999878,20.8522303 C27.960161,21.784266 28.0597281,22.7584753 28.0597281,23.7875101 L28.0597281,29.1435523 L37.2805073,29.1435523 L37.2805073,38 L45.7913298,38 L45.7913298,29.1435523 L55.2718493,29.1435523 C55.0943601,28.1609084 54.9471739,27.1529603 54.9471739,26.060665 C54.9471739,24.1375507 55.3021523,22.4421736 55.7999878,20.8522303 Z" />
  </svg>
);

SiteLogo.propTypes = propTypes;
SiteLogo.defaultProps = defaultProps;

export default SiteLogo;