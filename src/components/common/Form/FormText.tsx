import classNames from 'classnames';
import React from 'react';

const FormText: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  className,
  children,
  ...props
}) => (
  <small className={classNames(className, 'text-gray-700')} {...props}>
    {children}
  </small>
);

export default FormText;
