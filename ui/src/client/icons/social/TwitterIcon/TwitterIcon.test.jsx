import React from 'react';
import { shallow } from 'enzyme';

import TwitterIcon from './TwitterIcon';

test('renders without crashing', () => {
  shallow(<TwitterIcon />);
});
