import classNames from 'classnames';
import React from 'react';

interface InputGroupAppendProps extends React.HTMLAttributes<HTMLDivElement> {}

type InputGroupAppendComponent = React.FC<InputGroupAppendProps> & {};

const InputGroupAppend: InputGroupAppendComponent = ({ className, children, ...props }) => (
  <div className={classNames(className, 'input-group-append', 'flex')} {...props}>
    {children}
  </div>
);

export default InputGroupAppend;
