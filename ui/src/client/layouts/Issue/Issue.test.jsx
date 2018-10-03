import React from 'react';
import { shallow } from 'enzyme';

import Issue from './Issue';

const requiredProps = {
  issueNumber: 1,
  name: 'Eric Herrman',
  date: new Date('09/13/18'),
  discipline: 'Photography',
  icon: 'photo',
  description: `Lorem ipsum dolor sit amet consectetur adipising elit, sed do
euismod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim
veniam.`,
  profileImage: 'profileImage',
  hero: 'hero',
  socialIcons: [
    { type: 'instagram', linksTo: 'https://www.instagram.com' },
    { type: 'facebook', linksTo: 'https://www.facebook.com' },
    { type: 'web', linksTo: 'https://www.google.com' },
    { type: 'twitter', linksTo: 'https://www.twitter.com' },
    { type: 'snapchat', linksTo: 'https://www.snapchat.com' },
  ],
};

test('renders without crashing', () => {
  shallow(
    <Issue {...requiredProps}>
      <div>Hi</div>
    </Issue>,
  );
});
