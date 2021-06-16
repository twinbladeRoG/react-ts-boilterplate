import classNames from 'classnames';
import React from 'react';

const FormText: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  className,
  children,
  ...props
}) => (
  <small className={classNames(className, 'form-text px-4 py-2')} {...props}>
    {children}
  </small>
);

export default FormText;
