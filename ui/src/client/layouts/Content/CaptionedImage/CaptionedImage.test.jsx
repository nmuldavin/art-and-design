import React from 'react';
import { shallow } from 'enzyme';

import CaptionedImage from './CaptionedImage';

test('renders without crashing', () => {
  shallow(<CaptionedImage />);
});
