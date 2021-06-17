import { Meta, Story } from '@storybook/react';
import Carousel, { CarouselProps } from '../components/common/Carousel/Carousel';

export default {
  title: 'Components/Carousel',
  component: Carousel,
  argTypes: {
    slidesToShow: { control: 'number' },
    slidesToScroll: { control: 'number' },
  },
  infinite: { control: 'boolean' },
} as Meta;

const Template: Story<CarouselProps> = args => (
  <Carousel {...args}>
    <div className="">
      <img
        src="https://picsum.photos/600/400"
        alt=""
        className="block cover-full w-full rounded-2xl"
      />
    </div>
    <div className="">
      <img
        src="https://picsum.photos/1200/800"
        alt=""
        className="block cover-full w-full rounded-2xl"
      />
    </div>
    <div className="">
      <img
        src="https://picsum.photos/300/200"
        alt=""
        className="block cover-full w-full rounded-2xl"
      />
    </div>
    <div className="">
      <img
        src="https://picsum.photos/900/600"
        alt=""
        className="block cover-full w-full rounded-2xl"
      />
    </div>
  </Carousel>
);

export const NormalCarousel = Template.bind({});
NormalCarousel.args = {};
NormalCarousel.storyName = 'Normal Carousel';

export const MultiItemCarousel = Template.bind({});
MultiItemCarousel.args = { slidesToShow: 2, slidesToScroll: 2 };
MultiItemCarousel.storyName = 'Multi Item Carousel';

export const ResponsiveCarousel = Template.bind({});
ResponsiveCarousel.args = {
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
ResponsiveCarousel.storyName = 'Responsive Carousel';
