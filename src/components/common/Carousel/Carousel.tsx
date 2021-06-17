import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Slider, { CustomArrowProps, Settings } from 'react-slick';

const CarouselNextArrow = ({ onClick }: CustomArrowProps) => (
  <button
    type="button"
    onClick={onClick}
    className="absolute top-1/2 right-5 z-10 text-primary hover:text-primary-dark transition-all"
  >
    <FontAwesomeIcon icon={faChevronCircleRight} size="lg" />
  </button>
);

const CarouselPrevArrow = ({ onClick }: CustomArrowProps) => (
  <button
    type="button"
    onClick={onClick}
    className="absolute top-1/2 left-5 z-10 text-primary hover:text-primary-dark transition-all"
  >
    <FontAwesomeIcon icon={faChevronCircleLeft} size="lg" />
  </button>
);

const Dots = (dots: React.ReactNode) => (
  <div>
    <ul className="absolute flex bottom-3 left-1/2 space-x-2 transform -translate-x-1/2">{dots}</ul>
  </div>
);

const Dot = () => (
  <button
    type="button"
    className="w-4 h-4 transition-colors bg-white rounded-full opacity-50 hover:opacity-75"
  >
    {' '}
  </button>
);

export interface CarouselProps extends Settings {
  children?: React.ReactNode;
}

const Carousel: React.FC<Settings> = ({ children, ...props }) => (
  <Slider
    prevArrow={<CarouselPrevArrow />}
    nextArrow={<CarouselNextArrow />}
    dotsClass="carousel-dots"
    appendDots={Dots}
    customPaging={Dot}
    {...props}
  >
    {children}
  </Slider>
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
