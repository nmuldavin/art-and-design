import React from 'react';
import FacebookIcon from './FacebookIcon';
import InstagramIcon from './InstagramIcon';
import SnapchatIcon from './SnapchatIcon';
import TwitterIcon from './TwitterIcon';
import WebSocialIcon from './WebSocialIcon';

export const socialIcons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  snapchat: SnapchatIcon,
  twitter: TwitterIcon,
  web: WebSocialIcon,
};

const SocialIcon = ({ type, ...rest }) => {
  const Variant = socialIcons[type];

  return <Variant {...rest} />;
};

export default SocialIcon;
