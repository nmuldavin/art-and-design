import React, { Fragment } from 'react';
import { arrayOf, shape, string, instanceOf, number, node } from 'prop-types';

import IssueHeader from './IssueHeader';
import Profile from './Profile';

const propTypes = {
  issueNumber: number.isRequired,
  name: string.isRequired,
  date: instanceOf(Date).isRequired,
  discipline: string.isRequired,
  icon: string.isRequired,
  hero: string.isRequired,
  profileImage: string.isRequired,
  description: string.isRequired,
  socialIcons: arrayOf(
    shape({
      type: string,
      linksTo: string,
    }),
  ).isRequired,
  children: node.isRequired,
};

const Issue = ({
  issueNumber,
  name,
  date,
  discipline,
  icon,
  hero,
  profileImage,
  description,
  socialIcons,
  children,
}) => (
  <Fragment>
    <IssueHeader
      issueNumber={issueNumber}
      name={name}
      date={date}
      discipline={discipline}
      icon={icon}
      hero={hero}
    />
    <Profile
      name={name}
      profileImage={profileImage}
      description={description}
      socialIcons={socialIcons}
    />
    {children}
  </Fragment>
);

Issue.propTypes = propTypes;

export default Issue;
