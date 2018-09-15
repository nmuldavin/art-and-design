import React from 'react';
import { shallow } from 'enzyme';

import Example from './Example';

test('renders without crashing', () => {
  shallow(<Example />);
});
