import { Meta, Story } from '@storybook/react';
import Dropdown from '../components/common/Dropdown/Dropdown';
import Navbar, { NavbarProps } from '../components/common/Navbar/Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
  argTypes: {},
} as Meta;

const Template: Story<NavbarProps> = args => (
  <Navbar {...args}>
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
);

export const NavbarStory = Template.bind({});
NavbarStory.storyName = 'Navbar';
