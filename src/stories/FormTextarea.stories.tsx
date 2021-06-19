import { Meta, Story } from '@storybook/react';
import FormTextarea, { FormTextareaProps } from '../components/common/Form/FormTextarea';

export default {
  title: 'Components/Form/Textarea',
  component: FormTextarea,
  argTypes: {
    isValid: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
    plaintext: { control: 'boolean' },
  },
} as Meta;

const Template: Story<FormTextareaProps> = args => <FormTextarea {...args} />;

export const FormTextareaStory = Template.bind({});
FormTextareaStory.args = {
  placeholder: 'Write your text here',
};
FormTextareaStory.storyName = 'Textarea';
