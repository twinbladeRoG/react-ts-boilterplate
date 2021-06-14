import Dropdown from '../../components/common/Dropdown/Dropdown';
import Navbar from '../../components/common/Navbar/Navbar';

const NavbarPage = () => (
  <>
    <h2 className="text-dark dark:text-light text-2xl font-bold mb-5">Navbar</h2>
    <hr className="mb-5" />

    <Navbar>
      <Navbar.Collapse>
        <Navbar.Brand>
          <img
            className="block lg:hidden h-8 w-auto"
            src="https://picsum.photos/100/100"
            alt="Workflow"
          />
          <img
            className="hidden lg:block h-8 w-auto"
            src="https://picsum.photos/400/200"
            alt="Workflow"
          />
        </Navbar.Brand>
        <Navbar.Navigation>
          <Navbar.Link>Dashboard</Navbar.Link>
          <Navbar.Link>Team</Navbar.Link>
          <Navbar.Link>Projects</Navbar.Link>
          <Navbar.Button>Calendar</Navbar.Button>
        </Navbar.Navigation>
      </Navbar.Collapse>
      <Navbar.Menu>
        <Dropdown drop="down" align="right">
          <Dropdown.Toggle variant="light" buttonStyle="plain">
            <img className="h-8 w-8 rounded-full" src="https://picsum.photos/80/80" alt="" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Account</Dropdown.Item>
            <Dropdown.Item>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Menu>
    </Navbar>
  </>
);

export default NavbarPage;
