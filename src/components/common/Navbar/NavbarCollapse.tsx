import React from 'react';

interface NavbarCollapseProps extends React.HTMLAttributes<HTMLDivElement> {}

const NavbarCollapse: React.FC<NavbarCollapseProps> = ({ className, children, ...props }) => (
  <div
    className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
    {...props}
  >
    {children}
  </div>
);

export default NavbarCollapse;
