import { Meta, Story } from '@storybook/react';
import FormSelect, { FormSelectProps } from '../components/common/Form/FormSelect';

export default {
  title: 'Components/Form/Select',
  component: FormSelect,
  argsTypes: {
    isValid: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
    plaintext: { control: 'boolean' },
  },
} as Meta;

const Template: Story<FormSelectProps> = args => (
  <FormSelect {...args}>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </FormSelect>
);

export const FormSelectStory = Template.bind({});
FormSelectStory.args = {};
FormSelectStory.storyName = 'Select';
