import React from 'react';
import { shallow } from 'enzyme';

import Quote from './Quote';

test('renders without crashing', () => {
  shallow(<Quote author="Jimmy Bob">Sheeeeit</Quote>);
});
