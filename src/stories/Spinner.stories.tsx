import { Meta, Story } from '@storybook/react';
import Spinner, { SpinnerProps } from '../components/common/Spinner/Spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    size: { control: 'number' },
    variant: {
      options: ['primary', 'accent', 'warning', 'success', 'danger', 'light', 'dark'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<SpinnerProps> = args => <Spinner {...args} />;

export const SpinnerStory = Template.bind({});
SpinnerStory.args = { size: 16, variant: 'primary' };
SpinnerStory.storyName = 'Spinner';
