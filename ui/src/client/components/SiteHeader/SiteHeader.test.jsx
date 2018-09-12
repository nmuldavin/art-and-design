import React from 'react';
import { shallow } from 'enzyme';

import SiteHeader from './SiteHeader';

test('renders without crashing', () => {
  shallow(<SiteHeader />);
});
