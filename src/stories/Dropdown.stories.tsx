import { Meta, Story } from '@storybook/react';
import Dropdown, { DropdownProps } from '../components/common/Dropdown/Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    align: { control: 'radio', options: ['left', 'middle', 'right'] },
    drop: { control: 'radio', options: ['up', 'left', 'right', 'down'] },
  },
} as Meta;

const Template: Story<DropdownProps> = args => (
  <Dropdown {...args}>
    <Dropdown.Toggle>Dropdown Button</Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Header>Variants</Dropdown.Header>
      <Dropdown.Item>Primary</Dropdown.Item>
      <Dropdown.Item variant="accent">Accent</Dropdown.Item>
      <Dropdown.Item variant="warning">Warning</Dropdown.Item>
      <Dropdown.Item variant="danger">Danger</Dropdown.Item>
      <Dropdown.Item variant="success">Success</Dropdown.Item>
      <Dropdown.Item variant="light">Light</Dropdown.Item>
      <Dropdown.Item variant="dark">Dark</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

export const DropdownStory = Template.bind({});
DropdownStory.storyName = 'Dropdown';
