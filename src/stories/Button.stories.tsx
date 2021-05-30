import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button, { ButtonProps } from '../components/common/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {},
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
};
