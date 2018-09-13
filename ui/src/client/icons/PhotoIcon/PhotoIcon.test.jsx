import React from 'react';
import { shallow } from 'enzyme';

import PhotoIcon from './PhotoIcon';

test('renders without crashing', () => {
  shallow(<PhotoIcon />);
});
