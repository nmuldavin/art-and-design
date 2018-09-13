import React from 'react';
import { shallow } from 'enzyme';

import CameraIcon from './CameraIcon';

test('renders without crashing', () => {
  shallow(<CameraIcon />);
});
