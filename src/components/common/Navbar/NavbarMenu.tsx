import React from 'react';

interface NavbarMenuProps extends React.HTMLAttributes<HTMLDivElement> {}

const NavbarMenu: React.FC<NavbarMenuProps> = ({ children, className, ...props }) => (
  <div
    {...props}
    className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
  >
    <div className="ml-3 relative">{children}</div>
  </div>
);

export default NavbarMenu;
