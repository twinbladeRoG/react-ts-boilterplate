import React from 'react';
import { Menu } from '@headlessui/react';
import DropdownMenu from './DropdownMenu';
import DropdownItem from './DropdownItem';
import DropdownButton from './DropdownButton';

type DropdownProps = React.FC<{}> & {
  Button: typeof DropdownButton;
  Menu: typeof DropdownMenu;
  Item: typeof DropdownItem;
};

const Dropdown: DropdownProps = ({ children }) => (
  <Menu as="div" className="relative inline-block text-left">
    {children}
  </Menu>
);

Dropdown.Button = DropdownButton;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;

export default Dropdown;
