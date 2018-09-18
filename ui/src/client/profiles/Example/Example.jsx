import React, { Fragment } from 'react';

import ProfileHero from '../../layouts/ProfileHero';
import Profile from '../../layouts/Profile';

import hero from './hero.jpg';

const Example = () => (
  <Fragment>
    <ProfileHero
      issueNumber={1}
      name="Eric Herrmann"
      date={new Date('09/13/18')}
      discipline="Photography"
      icon="photo"
      hero={hero}
    />
    <Profile />
  </Fragment>
);

export default Example;
