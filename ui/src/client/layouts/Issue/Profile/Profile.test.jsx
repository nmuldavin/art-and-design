import React from 'react';
import { shallow } from 'enzyme';

import Profile from './Profile';

const requiredProps = {
  name: 'Eric Herrman',
  profileImage: 'image',
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

test('renders without crashing', () => {
  shallow(<Profile {...requiredProps} />);
});
