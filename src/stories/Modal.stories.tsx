import { Meta, Story } from '@storybook/react';
import { useState } from 'react';
import Button from '../components/common/Button';
import Modal, { ModalProps } from '../components/common/Modal/Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    centered: { control: 'boolean' },
    scrollable: { control: 'boolean' },
    disbaledBackdropPress: { control: 'boolean' },
  },
} as Meta;

const Template: Story<ModalProps> = args => {
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);

  return (
    <>
      <Button onClick={toggle}>Open Modal</Button>

      <Modal {...args} show={show} onClose={toggle}>
        <Modal.Header closeButton>Modal Title</Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempora quibusdam
          explicabo architecto maiores. Fuga atque nihil aspernatur alias odit, vitae velit debitis
          dignissimos minima nobis quae reiciendis expedita eaque quod iusto ipsa cupiditate
          recusandae sapiente totam excepturi cum at assumenda? Modi tempore vitae porro animi
          officia similique facilis vero aperiam officiis laboriosam nisi aspernatur quidem
          voluptates ab, accusamus asperiores velit neque assumenda praesentium sint? Ipsam,
          dignissimos blanditiis. Ut, inventore doloremque nam necessitatibus numquam veniam non
          tempore atque hic assumenda repellat provident distinctio fugiat, ullam incidunt similique
          nihil dicta, quasi totam. Cum laudantium, numquam delectus explicabo non voluptate
          reprehenderit iure.
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={toggle} variant="danger" buttonStyle="plain">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const ModalDefaultStory = Template.bind({});
ModalDefaultStory.args = {};
ModalDefaultStory.storyName = 'Modal';
