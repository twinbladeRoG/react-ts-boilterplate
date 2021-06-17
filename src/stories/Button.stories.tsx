import { Story, Meta } from '@storybook/react';
import Button, { ButtonProps } from '../components/common/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    isLoading: { control: 'boolean' },
    buttonStyle: {
      options: ['default', 'outline', 'plain'],
      control: { type: 'radio' },
      description: 'Button styles',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    variant: {
      options: ['primary', 'accent', 'warning', 'success', 'danger', 'light', 'dark'],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'lg', 'md'],
      control: { type: 'radio' },
    },
    loadingText: {
      control: 'text',
    },
  },
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const ButtonStory = Template.bind({});
ButtonStory.args = {
  children: 'Button',
};
ButtonStory.storyName = 'Button';
