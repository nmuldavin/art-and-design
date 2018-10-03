import React from 'react';
import { shallow } from 'enzyme';

import FullImage from './FullImage';

test('renders without crashing', () => {
  shallow(<FullImage />);
});
