import classNames from 'classnames';
import React from 'react';

interface NavbarLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const NavbarLink: React.FC<NavbarLinkProps> = ({ className, children, ...props }) => (
  <a
    className={classNames(
      className,
      'nav-item',
      'block sm:inline-block',
      'text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium',
    )}
    {...props}
  >
    {children}
  </a>
);

export default NavbarLink;
