import React from 'react';
import { shallow } from 'enzyme';

import SocialSvgIcon from './SocialSvgIcon';

test('renders without crashing', () => {
  shallow(
    <SocialSvgIcon>
      <path />
    </SocialSvgIcon>,
  );
});
