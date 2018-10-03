import React from 'react';
import { shallow } from 'enzyme';

import BottomNav from './BottomNav';

test('renders without crashing', () => {
  shallow(<BottomNav />);
});
