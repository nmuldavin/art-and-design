import React from 'react';
import { shallow } from 'enzyme';

import Icon from './Icon';

test('Passes along className prop', () => {
  shallow(<Icon className="my-class">Sheeit</Icon>).should.have.className(
    'my-class',
  );
});
