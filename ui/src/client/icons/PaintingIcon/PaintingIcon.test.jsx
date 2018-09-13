import React from 'react';
import { shallow } from 'enzyme';

import PaintingIcon from './PaintingIcon';

test('renders without crashing', () => {
  shallow(<PaintingIcon />);
});
