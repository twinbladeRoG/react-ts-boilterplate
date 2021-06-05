import { Menu, Transition } from '@headlessui/react';
import React from 'react';

const DropdownMenu: React.FC<{}> = ({ children }) => (
  <Transition
    as={React.Fragment}
    enter="transition ease-out duration-100"
    enterFrom="transform opacity-0 scale-95"
    enterTo="transform opacity-100 scale-100"
    leave="transition ease-in duration-75"
    leaveFrom="transform opacity-100 scale-100"
    leaveTo="transform opacity-0 scale-95"
  >
    <Menu.Items className="absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-md">
      {children}
    </Menu.Items>
  </Transition>
);

export default DropdownMenu;
