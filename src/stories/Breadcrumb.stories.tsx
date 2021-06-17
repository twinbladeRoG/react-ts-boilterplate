import { Meta, Story } from '@storybook/react';
import Breadcrumb, { BreadcrumbProps } from '../components/common/Breadcrumb/Breadcrumb';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  argTypes: {},
} as Meta;

const Template: Story<BreadcrumbProps> = args => (
  <Breadcrumb {...args}>
    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
    <Breadcrumb.Item href="/">Category</Breadcrumb.Item>
    <Breadcrumb.Item active>Product</Breadcrumb.Item>
  </Breadcrumb>
);

export const BreadcrumbStory = Template.bind({});
BreadcrumbStory.args = {};
BreadcrumbStory.storyName = 'Breadcrumb';
