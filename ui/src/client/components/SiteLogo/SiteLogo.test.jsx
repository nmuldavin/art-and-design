import React from 'react';
import { shallow } from 'enzyme';

import SiteLogo from './SiteLogo';

test('renders without crashing', () => {
  shallow(<SiteLogo />);
});

test('Passes along className prop', () => {
  shallow(<SiteLogo className="my-class" />).should.have.className('my-class');
});
