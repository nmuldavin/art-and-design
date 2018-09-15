import React from 'react';
import { shallow } from 'enzyme';

import NavMenu from './NavMenu';

test('renders without crashing', () => {
  shallow(<NavMenu />);
});

test('Passes along className prop', () => {
  shallow(<NavMenu className="my-class" />).should.have.className('my-class');
});
