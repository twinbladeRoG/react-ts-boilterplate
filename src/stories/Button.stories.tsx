import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button, { ButtonProps } from '../components/common/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    isLoading: { control: 'boolean' },
    color: {
      options: ['blue-400', 'red-400', 'yellow-400', 'gray-400'],
      control: { type: 'radio' },
      description: 'Color variant of the badge',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'blue-400' },
      },
    },
    variant: {
      options: ['primary', 'secondary', 'outline', 'rounded'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const ButtonStory = Template.bind({});
ButtonStory.args = {
  children: 'Button',
};
ButtonStory.storyName = 'Button';
