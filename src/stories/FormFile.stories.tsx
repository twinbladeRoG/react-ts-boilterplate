import { faImage } from '@fortawesome/free-solid-svg-icons';
import { Meta, Story } from '@storybook/react';
import FormFile, { FormFileProps } from '../components/common/Form/FormFile';

export default {
  title: 'Components/Form/File',
  component: FormFile,
  argTypes: {
    isValid: { control: 'boolean' },
    isInvalid: { control: 'boolean' },
  },
} as Meta;

const Template: Story<FormFileProps> = args => <FormFile {...args} />;

export const FormFileStory = Template.bind({});
FormFileStory.args = {};
FormFileStory.storyName = 'Default File';

export const FormFileCustomIconStory = Template.bind({});
FormFileCustomIconStory.args = {
  labelIcon: faImage,
};
FormFileCustomIconStory.storyName = 'Custom Icon';
