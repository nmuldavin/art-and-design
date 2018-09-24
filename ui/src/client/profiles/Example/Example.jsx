import React, { Fragment } from 'react';

import Issue from '../../layouts/Issue';

import hero from './hero.jpg';
import profileImage from './profile.jpg';

const issue = {
  issueNumber: 1,
  name: 'Eric Herrman',
  date: new Date('09/13/18'),
  discipline: 'Photography',
  icon: 'photo',
  hero,
  profileImage,
  description: `Lorem ipsum dolor sit amet consectetur adipising elit, sed do
euismod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim
veniam.`,
  socialIcons: [
    { type: 'instagram', linksTo: 'https://www.instagram.com' },
    { type: 'facebook', linksTo: 'https://www.facebook.com' },
    { type: 'web', linksTo: 'https://www.google.com' },
    { type: 'twitter', linksTo: 'https://www.twitter.com' },
    { type: 'snapchat', linksTo: 'https://www.snapchat.com' },
  ],
};

const Example = () => (
  <Fragment>
    <Issue {...issue}>
      <div>Holy crap</div>
    </Issue>
  </Fragment>
);

export default Example;
