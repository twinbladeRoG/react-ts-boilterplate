import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import logo from '../assets/icon.svg';

const routes = [
  { id: uuid(), name: 'Accordion', path: '/components/accordion' },
  { id: uuid(), name: 'Badge', path: '/components/badge' },
  { id: uuid(), name: 'Breadcrumb', path: '/components/breadcrumb' },
  { id: uuid(), name: 'Button', path: '/components/button' },
  { id: uuid(), name: 'Card', path: '/components/card' },
  { id: uuid(), name: 'Carousel', path: '/components/carousel' },
  { id: uuid(), name: 'Dropdown', path: '/components/dropdown' },
  { id: uuid(), name: 'Form', path: '/components/form' },
  { id: uuid(), name: 'InputGroup', path: '/components/inputgroup' },
  { id: uuid(), name: 'Modal', path: '/components/modal' },
  { id: uuid(), name: 'Navbar', path: '/components/navbar' },
  { id: uuid(), name: 'Spinner', path: '/components/spinner' },
  { id: uuid(), name: 'Tab', path: '/components/tabs' },
  { id: uuid(), name: 'Table', path: '/components/table' },
  { id: uuid(), name: 'Tooltip', path: '/components/tooltips' },
  { id: uuid(), name: 'Sidebars / OffCanvas', path: '/components/sidebar' },
  { id: uuid(), name: 'Using Headless UI', path: '/using-headless' },
];

const Sidebar: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className }) => (
  <div
    className={classNames(
      className,
      'transition-colors bg-light-dark dark:bg-black min-h-screen p-5',
    )}
  >
    <Link to="/" className="block mb-5">
      <img src={logo} alt="logo" className="w-20 h-20" />
    </Link>

    <ul>
      {routes.map(route => (
        <li key={route.id} className="text-dark dark:text-light mb-3">
          <NavLink
            to={route.path}
            exact
            activeClassName="font-semibold text-primary-dark dark:text-primary"
          >
            {route.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default Sidebar;
