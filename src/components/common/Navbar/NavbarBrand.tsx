import React from 'react';

interface NavbarBrandProps extends React.HTMLAttributes<HTMLDivElement> {}

const NavbarBrand: React.FC<NavbarBrandProps> = ({ className, children, ...props }) => (
  <div className="flex-shrink-0 flex items-center" {...props}>
    {children}
  </div>
);

export default NavbarBrand;
