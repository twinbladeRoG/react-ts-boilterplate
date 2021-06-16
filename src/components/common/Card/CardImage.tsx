import classNames from 'classnames';
import React from 'react';

interface CardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const CardImage: React.FC<CardImageProps> = ({ className, alt, ...props }) => (
  <img {...props} alt={alt} className={classNames(className, 'w-full object-cover rounded-t-lg')} />
);

CardImage.defaultProps = {
  alt: '',
};

export default CardImage;
