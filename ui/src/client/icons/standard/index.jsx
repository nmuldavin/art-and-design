import React from 'react';
import DesignIcon from './DesignIcon';
import PaintingIcon from './PaintingIcon';
import PhotoIcon from './PhotoIcon';

export const icons = {
  design: DesignIcon,
  painting: PaintingIcon,
  photo: PhotoIcon,
};

const Icon = ({ type, ...rest }) => {
  const Variant = icons[type];

  return <Variant {...rest} />;
};

export default Icon;
