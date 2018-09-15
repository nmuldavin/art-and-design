import React from 'react';
import { shallow } from 'enzyme';

import ProfileHero from './ProfileHero';

test('renders without crashing', () => {
  const props = {
    issueNumber: 1,
    name: 'Name',
    discipline: 'discipline',
    date: new Date('September 13, 2018'),
    icon: 'hi',
    image: 'image',
  };

  shallow(<ProfileHero {...props} />);
});
