import { Meta, Story } from '@storybook/react';
import Accordian, { AccordionProps } from '../components/common/Accordian/Accordian';

export default {
  title: 'Components/Accordion',
  component: Accordian,
  argTypes: {
    defaultKey: { control: 'text' },
    multiple: { control: 'boolean' },
    scrollOnOpen: { control: 'boolean' },
  },
} as Meta;

const Template: Story<AccordionProps> = args => (
  <Accordian {...args}>
    <Accordian.Toggle eventKey="0">Accordion 1</Accordian.Toggle>
    <Accordian.Collapse eventKey="0" className="text-dark dark:text-white">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis officiis a soluta aliquid quam
      quibusdam, corrupti temporibus fuga praesentium numquam.
    </Accordian.Collapse>
    <Accordian.Toggle eventKey="1">Accordian 2</Accordian.Toggle>
    <Accordian.Collapse eventKey="1" className="text-dark dark:text-white">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos quas voluptate nesciunt
      ullam corrupti voluptatem nihil debitis, cupiditate, perspiciatis, magnam in quidem
      reprehenderit nobis labore nam ratione necessitatibus quis adipisci aperiam delectus totam
      quo? Earum deserunt aliquam nam recusandae veritatis ea a, provident laborum iure quaerat
      doloremque autem odio incidunt officia repellendus vitae iusto sunt eligendi? Aut autem dolor
      at omnis sed soluta adipisci vero natus, ratione ut deserunt quia est necessitatibus nesciunt
      dolorum non delectus similique veniam esse libero provident. Officia minus atque debitis ipsa
      minima nesciunt obcaecati consectetur dolorem quas distinctio autem praesentium hic nostrum
      eum, aliquid eaque consequatur beatae. Quasi ut aliquid architecto, quaerat sed ea veritatis
      qui fugit sunt nisi. Quibusdam laudantium fugiat aliquid magnam voluptate, aut ipsum
      voluptatibus dolorem doloremque, sunt distinctio ex. Recusandae laborum aperiam deserunt
      corrupti tempora iusto maxime non sit earum repudiandae, minima fuga voluptatem laboriosam
      voluptatibus labore quia, veniam ex porro nostrum numquam modi
    </Accordian.Collapse>
  </Accordian>
);

export const AccordianStory = Template.bind({});
AccordianStory.args = {};
AccordianStory.storyName = 'Accordion';
