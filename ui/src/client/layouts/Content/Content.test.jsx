import React from 'react';
import { shallow } from 'enzyme';

import Content from './Content';

test('renders without crashing', () => {
  shallow(<Content />);
});
