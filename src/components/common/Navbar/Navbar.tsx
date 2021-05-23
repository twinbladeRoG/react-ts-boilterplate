import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';
import NavbarBrand from './NavbarBrand';
import NavbarButton from './NavbarButton';
import NavbarCollapse from './NavbarCollapse';
import NavbarContext from './NavbarContext';
import NavbarLink from './NavbarLink';
import NavbarMenu from './NavbarMenu';
import NavbarNavigation from './NavbarNavigation';

interface NavbarProps extends React.HTMLAttributes<HTMLElement> {}

type NavbarComponent = React.FC<NavbarProps> & {
  Brand: typeof NavbarBrand;
  Navigation: typeof NavbarNavigation;
  Collapse: typeof NavbarCollapse;
  Menu: typeof NavbarMenu;
  Link: typeof NavbarLink;
  Button: typeof NavbarButton;
};

const Navbar: NavbarComponent = ({ className, children, ...props }) => {
  const [open, setOpen] = React.useState(false);
  const toggle = () => setOpen(!open);

  return (
    <NavbarContext.Provider value={[open, toggle]}>
      <nav className={classNames(className, 'navbar bg-gray-900')} {...props}>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Navbar Toggle */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={toggle}
              >
                <span className="sr-only">Open main menu</span>
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
            {/* Menu */}
            {children}
          </div>
        </div>
      </nav>
    </NavbarContext.Provider>
  );
};

Navbar.Brand = NavbarBrand;
Navbar.Navigation = NavbarNavigation;
Navbar.Collapse = NavbarCollapse;
Navbar.Menu = NavbarMenu;
Navbar.Link = NavbarLink;
Navbar.Button = NavbarButton;

export default Navbar;
