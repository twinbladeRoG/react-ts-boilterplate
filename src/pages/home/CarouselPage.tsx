import React from 'react';
import Carousel from '../../components/common/Carousel/Carousel';

const CarouselPage = () => (
  <>
    <h2 className="text-dark dark:text-light text-2xl font-bold mb-5">Carousel</h2>

    <h3 className="text-dark dark:text-light text-xl font-bold mb-3">Simple Carousel</h3>
    <hr className="mb-5" />

    <Carousel className="mb-5">
      <img src="https://picsum.photos/600/200" alt="" />
      <img src="https://picsum.photos/600/300" alt="" />
      <img src="https://picsum.photos/500/200" alt="" />
      <img src="https://picsum.photos/600/200" alt="" />
      <img src="https://picsum.photos/650/200" alt="" />
      <img src="https://picsum.photos/800/200" alt="" />
    </Carousel>

    <h3 className="text-dark dark:text-light text-xl font-bold mb-3">Multiple Items Carousel</h3>
    <hr className="mb-5" />

    <Carousel className="mb-5" slidesToShow={3} slidesToScroll={3}>
      <div className="p-10">
        <img src="https://picsum.photos/600/400" alt="" className="block cover-full rounded-2xl" />
      </div>
      <div className="p-10">
        <img src="https://picsum.photos/600/400" alt="" className="block cover-full rounded-2xl" />
      </div>
      <div className="p-10">
        <img src="https://picsum.photos/600/400" alt="" className="block cover-full rounded-2xl" />
      </div>
      <div className="p-10">
        <img src="https://picsum.photos/700/400" alt="" className="block cover-full rounded-2xl" />
      </div>
      <div className="p-10">
        <img src="https://picsum.photos/700/400" alt="" className="block cover-full rounded-2xl" />
      </div>
      <div className="p-10">
        <img src="https://picsum.photos/700/400" alt="" className="block cover-full rounded-2xl" />
      </div>
    </Carousel>
  </>
);

export default CarouselPage;
