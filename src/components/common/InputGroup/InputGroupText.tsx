import classNames from 'classnames';
import React from 'react';

interface InputGroupTextProps extends React.HTMLAttributes<HTMLSpanElement> {}

const InputGroupText: React.FC<InputGroupTextProps> = ({ className, children, ...props }) => (
  <span className={classNames(className, 'flex items-center font-medium px-3')} {...props}>
    {children}
  </span>
);

export default InputGroupText;
