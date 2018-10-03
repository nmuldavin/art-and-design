import React from 'react';
import { shallow } from 'enzyme';

import InstagramIcon from './InstagramIcon';

test('renders without crashing', () => {
  shallow(<InstagramIcon />);
});
