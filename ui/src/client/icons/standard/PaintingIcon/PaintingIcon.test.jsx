import React from 'react';
import { shallow } from 'enzyme';

import PaintingIcon from './PaintingIcon';

test('Passes on className', () => {
  shallow(<PaintingIcon className="my-class" />).should.have.className(
    'my-class',
  );
});
