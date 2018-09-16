import React from 'react';
import { shallow } from 'enzyme';

import SvgIcon from './SvgIcon';

test('Passes along className prop', () => {
  shallow(<SvgIcon className="my-class">Sheeit</SvgIcon>).should.have.className(
    'my-class',
  );
});
