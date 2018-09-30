import React from 'react';
import { shallow } from 'enzyme';

import DualImage from './DualImage';

test('renders without crashing', () => {
  shallow(<DualImage />);
});
