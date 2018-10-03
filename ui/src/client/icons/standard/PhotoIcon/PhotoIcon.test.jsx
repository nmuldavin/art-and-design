import React from 'react';
import { shallow } from 'enzyme';

import PhotoIcon from './PhotoIcon';

test('Passes on className', () => {
  shallow(<PhotoIcon className="my-class" />).should.have.className('my-class');
});
