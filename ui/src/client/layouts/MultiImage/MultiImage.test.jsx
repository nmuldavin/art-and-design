import React from 'react';
import { shallow } from 'enzyme';

import MultiImage from './MultiImage';

test('renders without crashing', () => {
  shallow(<MultiImage />);
});
