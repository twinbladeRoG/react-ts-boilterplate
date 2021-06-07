import { Menu } from '@headlessui/react';
import classNames from 'classnames';
import React from 'react';

export interface DropdownItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const DropdownItem: React.FC<DropdownItemProps> = ({ children, className, ...props }) => (
  <Menu.Item>
    {({ active, disabled }) => (
      <button
        {...props}
        type="button"
        disabled={disabled}
        className={classNames(
          className,
          'block py-1 px-5 m-1 rounded-md',
          active ? 'bg-blue-500 text-white' : 'bg-white text-black',
        )}
      >
        {children}
      </button>
    )}
  </Menu.Item>
);

export default DropdownItem;
