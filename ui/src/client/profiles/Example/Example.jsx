import React, { Fragment } from 'react';

import CameraIcon from '../../icons/PhotoIcon';
import ProfileHero from '../../layouts/ProfileHero';

import hero from './hero.jpg';

const Example = () => (
  <Fragment>
    <ProfileHero
      issueNumber={1}
      name="Eric Herrmann"
      date={new Date('09/13/18')}
      discipline="Photography"
      icon={<CameraIcon />}
      hero={hero}
    />
  </Fragment>
);

export default Example;
