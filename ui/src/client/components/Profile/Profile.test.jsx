import React from 'react';
import { shallow } from 'enzyme';

import Profile from './Profile';

test('renders without crashing', () => {
  shallow(<Profile />);
});
