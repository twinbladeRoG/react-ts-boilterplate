import { Menu } from '@headlessui/react';
import classNames from 'classnames';
import React from 'react';

const DropdownButton: React.FC<{}> = ({ children }) => (
  <Menu.Button
    className={classNames(
      'text-white font-medium px-4 py-2 shadow rounded',
      'focus:outline-none focus:ring-4 focus:shadow-lg hover:shadow-lg',
      'transition duration-300 ease-in-out',
      'bg-blue-500 focus:bg-blue-700 hover:bg-blue-700',
    )}
  >
    {children}
  </Menu.Button>
);

export default DropdownButton;
