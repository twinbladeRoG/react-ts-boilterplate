import React from 'react';
import { Story, Meta } from '@storybook/react';

import Badge, { BadgeProps } from '../components/common/Badge/Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    color: {
      description: 'Color variant of the badge',
      defaultValue: 'blue-400',
      options: ['blue-400', 'red-400', 'yellow-400', 'gray-400'],
      control: { type: 'radio' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Hello' },
      },
      type: { name: 'string' },
    },
    pill: { control: 'boolean' },
  },
} as Meta;

const Template: Story<BadgeProps> = args => <Badge {...args} />;

export const BadgeStory = Template.bind({});
BadgeStory.args = {
  children: 'Badge',
};
BadgeStory.storyName = 'Badge';
