import Form from '../../components/common/Form/Form';

const FormPage = () => (
  <>
    <h2 className="text-dark dark:text-light text-2xl font-bold mb-5">Form</h2>

    <h3 className="text-dark dark:text-light text-xl font-bold mb-3">Form Elements</h3>
    <hr className="mb-5" />

    <Form.Group controlId="form-item">
      <Form.Label>Label</Form.Label>
      <Form.Control type="text" placeholder="Control" />
    </Form.Group>

    <Form.Group>
      <Form.Label>Checkbox / Radio</Form.Label>
      <Form.Check name="form-check" type="radio" id="form-radio" label="Radio" />
      <Form.Check name="form-check" type="checkbox" id="form-checkbox" label="Checkbox" />
    </Form.Group>

    <Form.Group>
      <Form.Label className="block">Checkbox / Radio Inline</Form.Label>
      <Form.Check inline name="form-check" type="radio" id="form-radio-inline" label="Radio" />
      <Form.Check
        inline
        name="form-check"
        type="checkbox"
        id="form-checkbox-inline"
        label="Checkbox"
      />
    </Form.Group>

    <Form.Group controlId="form-select">
      <Form.Label>Select</Form.Label>
      <Form.Select name="form-select">
        <option value="1" selected disabled>
          Select
        </option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Form.Select>
    </Form.Group>

    <Form.Group>
      <Form.Label className="block">Upload file</Form.Label>
      <Form.File />
    </Form.Group>

    <Form.Group controlId="textarea">
      <Form.Label>Textarea</Form.Label>
      <Form.Textarea />
    </Form.Group>

    <h3 className="text-dark dark:text-light text-xl font-bold mb-3">Plain styled Form Elements</h3>
    <hr className="mb-5" />

    <Form.Group controlId="form-item">
      <Form.Label>Label</Form.Label>
      <Form.Control type="text" placeholder="Control" plaintext />
    </Form.Group>

    <Form.Group controlId="form-select">
      <Form.Label>Select</Form.Label>
      <Form.Select name="form-select" plaintext>
        <option value="1" selected disabled>
          Select
        </option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Form.Select>
    </Form.Group>

    <Form.Group controlId="textarea">
      <Form.Label>Textarea</Form.Label>
      <Form.Textarea plaintext placeholder="Enter your text here" />
    </Form.Group>

    <h3 className="text-dark dark:text-light text-xl font-bold mb-3">Form Validation Styles</h3>
    <hr className="mb-5" />

    <Form.Group controlId="form-item">
      <Form.Label>Label</Form.Label>
      <Form.Control type="text" placeholder="Control" isValid />
      <Form.Control.Feedback type="valid">All good!</Form.Control.Feedback>
    </Form.Group>

    <Form.Group controlId="form-select">
      <Form.Label>Select</Form.Label>
      <Form.Select name="form-select" isValid>
        <option value="1" selected disabled>
          Select
        </option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Form.Select>
      <Form.Control.Feedback type="valid">All good!</Form.Control.Feedback>
    </Form.Group>

    <Form.Group controlId="textarea">
      <Form.Label>Textarea</Form.Label>
      <Form.Textarea isValid placeholder="Enter your text here" />
      <Form.Control.Feedback type="valid">All good!</Form.Control.Feedback>
    </Form.Group>

    <Form.Group controlId="form-item">
      <Form.Label>Label</Form.Label>
      <Form.Control type="text" placeholder="Control" isInvalid />
      <Form.Control.Feedback type="invalid">Something seems wrong!</Form.Control.Feedback>
    </Form.Group>

    <Form.Group controlId="form-select">
      <Form.Label>Select</Form.Label>
      <Form.Select name="form-select" isInvalid>
        <option value="1" selected disabled>
          Select
        </option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Form.Select>
      <Form.Control.Feedback type="invalid">Something seems wrong!</Form.Control.Feedback>
    </Form.Group>

    <Form.Group controlId="textarea">
      <Form.Label>Textarea</Form.Label>
      <Form.Textarea isInvalid placeholder="Enter your text here" />
      <Form.Control.Feedback type="invalid">Something seems wrong!</Form.Control.Feedback>
    </Form.Group>
  </>
);

export default FormPage;
