import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';

interface BreadcrumbItemProps extends React.HTMLAttributes<HTMLLIElement> {
  href: string;
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
    <a href={href} className={classNames(active ? 'text-blue-600' : '')}>
      <FontAwesomeIcon icon={faChevronRight} className="text-blue-600 mr-3" />
      {children}
    </a>
  </li>
);

BreadcrumbItem.defaultProps = {
  href: '#',
  active: false,
};

export default BreadcrumbItem;
