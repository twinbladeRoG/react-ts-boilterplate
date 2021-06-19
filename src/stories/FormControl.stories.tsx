import { Meta, Story } from '@storybook/react';
import FormControl, { FormControlProps } from '../components/common/Form/FormControl';

export default {
  title: 'Components/Form/Control',
  component: FormControl,
  argTypes: {
    isValid: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
    plaintext: { control: 'boolean' },
  },
} as Meta;

const Template: Story<FormControlProps> = args => <FormControl {...args} />;

export const FormControlStory = Template.bind({});
FormControlStory.args = {
  type: 'text',
  placeholder: 'Form Control',
};
FormControlStory.storyName = 'Control';
