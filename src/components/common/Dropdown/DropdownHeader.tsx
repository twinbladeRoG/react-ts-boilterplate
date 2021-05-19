import classNames from 'classnames';
import React from 'react';

interface DropdownHeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const DropdownHeader: React.FC<DropdownHeaderProps> = ({ className, children, ...props }) => (
  <h6 className={classNames(className, 'font-medium text-gray-700 border-b px-5')} {...props}>
    {children}
  </h6>
);

export default DropdownHeader;
