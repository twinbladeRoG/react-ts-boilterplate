import { Meta, Story } from '@storybook/react';
import FormCheck, { FormCheckProps } from '../components/common/Form/FormCheck';

export default {
  title: 'Components/Form/Check',
  component: FormCheck,
  argTypes: {
    type: {
      options: ['checkbox', 'radio'],
      control: 'radio',
    },
    inline: { control: 'boolean' },
  },
} as Meta;

const Template: Story<FormCheckProps> = args => <FormCheck {...args} id="form-check" />;

export const FormCheckStory = Template.bind({});
FormCheckStory.args = {
  label: 'Check',
};
FormCheckStory.storyName = 'Check';
