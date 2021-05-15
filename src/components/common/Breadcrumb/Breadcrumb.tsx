import classNames from 'classnames';
import React from 'react';
import BreadcrumbItem from './BreadcrumbItem';

type BreadcrumbType = React.FC<React.HTMLAttributes<HTMLDivElement>> & {
  Item: typeof BreadcrumbItem;
};

const Breadcrumb: BreadcrumbType = ({ className, children, ...props }) => (
  <nav className={classNames(className, 'breadcrumb my-3')} {...props}>
    <ol className="flex items-center space-x-3">{children}</ol>
  </nav>
);

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
