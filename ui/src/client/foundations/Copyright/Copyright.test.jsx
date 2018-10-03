import React from 'react';
import { shallow } from 'enzyme';

import Copyright from './Copyright';

test('renders without crashing', () => {
  shallow(<Copyright />);
});
