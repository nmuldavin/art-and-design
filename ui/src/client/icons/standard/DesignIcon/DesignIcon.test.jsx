import React from 'react';
import { shallow } from 'enzyme';

import DesignIcon from './DesignIcon';

test('Passes on className', () => {
  shallow(<DesignIcon className="my-class" />).should.have.className(
    'my-class',
  );
});
