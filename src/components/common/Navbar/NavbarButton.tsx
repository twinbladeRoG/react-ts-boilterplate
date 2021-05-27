import classNames from 'classnames';
import React from 'react';

interface NavbarButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const NavbarButton: React.FC<NavbarButtonProps> = ({ className, children, ...props }) => (
  <button
    type="button"
    className={classNames(
      className,
      'nav-item',
      'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium',
    )}
    {...props}
  >
    {children}
  </button>
);

export default NavbarButton;
