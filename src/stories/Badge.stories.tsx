import React from 'react';
import { Story, Meta } from '@storybook/react';

import Badge, { BadgeProps } from '../components/common/Badge/Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      options: ['primary', 'accent', 'warning', 'success', 'danger', 'light', 'dark'],
      control: { type: 'radio' },
    },
    variantType: {
      options: ['light', 'default', 'dark'],
      control: 'radio',
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
