import React from 'react';
import { Story, Meta } from '@storybook/react';

import Badge, { BadgeProps } from '../components/common/Badge/Badge';

export default {
  title: 'Example/Badge',
  component: Badge,
  argTypes: {},
} as Meta;

const Template: Story<BadgeProps> = args => <Badge {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'Badge',
};
