import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../components/common/Button';
import Form from '../../components/common/Form/Form';
import InputGroup from '../../components/common/InputGroup/InputGroup';

const InputGroupPage = () => (
  <>
    <h2 className="text-dark dark:text-light text-2xl font-bold mb-5">InputGroup</h2>

    <h3 className="text-dark dark:text-light text-xl font-bold mb-3">Input Groups</h3>
    <hr className="mb-5" />

    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text className="bg-blue-200">
          <FontAwesomeIcon icon={faMailBulk} className="text-blue-600" />
        </InputGroup.Text>
      </InputGroup.Prepend>
      <Form.Control placeholder="Email" />
    </InputGroup>

    <InputGroup className="mb-3">
      <Form.Control placeholder="Password" />
      <InputGroup.Append>
        <InputGroup.Text className="bg-blue-200">Hint!</InputGroup.Text>
      </InputGroup.Append>
    </InputGroup>

    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <Button>Prepend</Button>
      </InputGroup.Prepend>
      <Form.Control placeholder="Email" />
    </InputGroup>

    <InputGroup className="mb-3">
      <Form.Control placeholder="Your text here..." />
      <InputGroup.Append>
        <Button>Append</Button>
      </InputGroup.Append>
    </InputGroup>

    <InputGroup className="mb-3">
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
  </>
);

export default InputGroupPage;
