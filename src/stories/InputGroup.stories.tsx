import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Story } from '@storybook/react';
import Button from '../components/common/Button';
import Form from '../components/common/Form/Form';
import InputGroup, { InputGroupProps } from '../components/common/InputGroup/InputGroup';

export default {
  title: 'Components/InputGroup',
  component: InputGroup,
  argTypes: {},
};

export const InputGroupLeftStory: Story<InputGroupProps> = args => (
  <InputGroup {...args}>
    <InputGroup.Prepend>
      <InputGroup.Text className="bg-blue-200">
        <FontAwesomeIcon icon={faMailBulk} className="text-blue-600" />
      </InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control placeholder="Email" />
  </InputGroup>
);
InputGroupLeftStory.storyName = 'InputGroup Left';

export const InputGroupRightStory: Story<InputGroupProps> = args => (
  <InputGroup {...args}>
    <Form.Control placeholder="Password" />
    <InputGroup.Append>
      <InputGroup.Text className="bg-blue-200">Hint!</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>
);
InputGroupLeftStory.storyName = 'InputGroup Right';

export const InputGroupBothStory: Story<InputGroupProps> = args => (
  <InputGroup {...args}>
    <InputGroup.Prepend>
      <Button color="gray-300" className="text-gray-900">
        Button
      </Button>
      <InputGroup.Text className="bg-blue-200">In between</InputGroup.Text>
      <Button color="gray-300" className="text-gray-900">
        Button
      </Button>
    </InputGroup.Prepend>
    <Form.Control placeholder="In control" />
    <InputGroup.Append>
      <Button color="gray-300" className="text-gray-900">
        Button
      </Button>
      <InputGroup.Text className="bg-blue-200">
        <FontAwesomeIcon icon={faMailBulk} className="text-blue-600" />
      </InputGroup.Text>
      <Button color="gray-300" className="text-gray-900">
        Button
      </Button>
    </InputGroup.Append>
  </InputGroup>
);
InputGroupBothStory.storyName = 'InputGroup Both Sides';
