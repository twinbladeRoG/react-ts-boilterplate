import Dropdown from '../../components/common/Dropdown/Dropdown';

const DropdownPage = () => (
  <>
    <h2 className="text-dark dark:text-light text-2xl font-bold mb-5">Dropdown</h2>

    <h3 className="text-dark dark:text-light text-xl font-bold mb-3">Dropdown Placements</h3>
    <hr className="mb-5" />

    <div className="flex  space-x-3 mb-7">
      <Dropdown>
        <Dropdown.Toggle>Auto</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Header>Hello World!</Dropdown.Header>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
          <Dropdown.Item>Item 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown drop="up">
        <Dropdown.Toggle>Up</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Header>Hello World!</Dropdown.Header>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
          <Dropdown.Item>Item 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown drop="down">
        <Dropdown.Toggle>Down</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Header>Hello World!</Dropdown.Header>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
          <Dropdown.Item>Item 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown drop="left">
        <Dropdown.Toggle>Left</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Header>Hello World!</Dropdown.Header>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
          <Dropdown.Item>Item 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown drop="right">
        <Dropdown.Toggle>Right</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Header>Hello World!</Dropdown.Header>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
          <Dropdown.Item>Item 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>

    <h3 className="text-dark dark:text-light text-xl font-bold mb-3">Dropdown Alignment</h3>
    <hr className="mb-5" />

    <div className="flex space-x-3 mb-7">
      <Dropdown align="left">
        <Dropdown.Toggle>Left Aligned</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Header>Header</Dropdown.Header>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
          <Dropdown.Item>Item 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle>Middle Aligned</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Header>Header</Dropdown.Header>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
          <Dropdown.Item>Item 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown align="right">
        <Dropdown.Toggle>Right Aligned</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Header>Header</Dropdown.Header>
          <Dropdown.Item>Item 1</Dropdown.Item>
          <Dropdown.Item>Item 2</Dropdown.Item>
          <Dropdown.Item>Item 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>

    <h3 className="text-dark dark:text-light text-xl font-bold mb-3">Item Color Variants</h3>
    <hr className="mb-5" />

    <Dropdown>
      <Dropdown.Toggle>Dropdown</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Header>Variants</Dropdown.Header>
        <Dropdown.Item>Primary</Dropdown.Item>
        <Dropdown.Item variant="accent">Accent</Dropdown.Item>
        <Dropdown.Item variant="warning">Warning</Dropdown.Item>
        <Dropdown.Item variant="danger">Danger</Dropdown.Item>
        <Dropdown.Item variant="success">Success</Dropdown.Item>
        <Dropdown.Item variant="light">Light</Dropdown.Item>
        <Dropdown.Item variant="dark">Dark</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </>
);

export default DropdownPage;
