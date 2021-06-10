import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItemProps extends React.HTMLAttributes<HTMLLIElement> {
  href?: string;
  active?: boolean;
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  className,
  children,
  href,
  active,
  ...props
}) => (
  <li className={className} {...props}>
    <Link
      to={String(href)}
      className={classNames(active ? 'text-blue-600' : 'text-dark dark:text-light')}
    >
      <FontAwesomeIcon icon={faChevronRight} className="text-blue-600 mr-3" />
      {children}
    </Link>
  </li>
);

BreadcrumbItem.defaultProps = {
  href: '#',
  active: false,
};

export default BreadcrumbItem;
