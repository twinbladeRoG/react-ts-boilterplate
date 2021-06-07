import React from 'react';
import Dropdown from '../components/common/@headlessui/Dropdown/Dropdown';
import Modal from '../components/common/@headlessui/Modal/Modal';
import Button from '../components/common/Button';

const UsingHeadless = () => {
  const [show, setShow] = React.useState(false);
  const toggle = () => setShow(!show);

  return (
    <div className="bg-white shadow-lg rounded-md p-5 m-5">
      <h4 className="text-blue-500 font-bold text-lg mt-5">Modal</h4>
      <hr className="mb-3" />
      <Button onClick={toggle}>Open Modal</Button>
      <Modal show={show} onClose={toggle}>
        <Modal.Header closeButton>Headless UI Modal</Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate facere architecto
          numquam quod voluptate placeat, laboriosam explicabo deleniti inventore nisi tempora
          minima sit sed quaerat magni quia adipisci! Id sed magni suscipit error, ut deserunt
          ratione ab perferendis inventore.
        </Modal.Body>
        <Modal.Footer>
          <Button color="red-400" className="mr-2" onClick={toggle}>
            Close
          </Button>
          <Button color="green-400">Submit</Button>
        </Modal.Footer>
      </Modal>

      <h4 className="text-blue-500 font-bold text-lg mt-5">Dropdown</h4>
      <hr className="mb-3" />

      <Dropdown>
        <Dropdown.Button>Dropdown</Dropdown.Button>
        <Dropdown.Menu>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default UsingHeadless;
