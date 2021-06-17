import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItemProps extends React.HTMLAttributes<HTMLLIElement> {
  href?: string;
  active?: boolean;
  asRouterLink?: boolean;
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  className,
  children,
  asRouterLink,
  href,
  active,
  ...props
}) => (
  <li className={className} {...props}>
    {asRouterLink ? (
      <Link
        to={String(href)}
        className={classNames(active ? 'text-blue-600' : 'text-dark dark:text-light')}
      >
        <FontAwesomeIcon icon={faChevronRight} className="text-blue-600 mr-3" />
        {children}
      </Link>
    ) : (
      <a
        href={String(href)}
        className={classNames(active ? 'text-blue-600' : 'text-dark dark:text-light')}
      >
        <FontAwesomeIcon icon={faChevronRight} className="text-blue-600 mr-3" />
        {children}
      </a>
    )}
  </li>
);

BreadcrumbItem.defaultProps = {
  href: '#',
  active: false,
  asRouterLink: false,
};

export default BreadcrumbItem;
