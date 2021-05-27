import classNames from 'classnames';
import React from 'react';

interface InputGroupPrependProps extends React.HTMLAttributes<HTMLDivElement> {}

type InputGroupPrependComponent = React.FC<InputGroupPrependProps> & {};

const InputGroupPrepend: InputGroupPrependComponent = ({ className, children, ...props }) => (
  <div className={classNames(className, 'input-group-prepend', 'flex')} {...props}>
    {children}
  </div>
);

export default InputGroupPrepend;
