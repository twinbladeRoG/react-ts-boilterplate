import React from 'react';
import Slider, { Settings } from 'react-slick';

const Carousel: React.FC<Settings> = ({ children, ...props }) => (
  <Slider {...props}>{children}</Slider>
);

Carousel.defaultProps = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
};

export default Carousel;
