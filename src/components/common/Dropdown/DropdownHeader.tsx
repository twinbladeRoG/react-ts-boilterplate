import classNames from 'classnames';
import React from 'react';

interface DropdownHeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const DropdownHeader: React.FC<DropdownHeaderProps> = ({ className, children, ...props }) => (
  <h6
    className={classNames(className, 'font-medium text-gray-500 text-sm border-b px-5 py-1')}
    {...props}
  >
    {children}
  </h6>
);

export default DropdownHeader;
