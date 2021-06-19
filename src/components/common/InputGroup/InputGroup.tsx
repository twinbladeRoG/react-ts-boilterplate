import classNames from 'classnames';
import React from 'react';
import InputGroupAppend from './InputGroupAppend';
import InputGroupPrepend from './InputGroupPrepend';
import InputGroupText from './InputGroupText';

export interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

export type InputGroupComponent = React.FC<InputGroupProps> & {
  Prepend: typeof InputGroupPrepend;
  Append: typeof InputGroupAppend;
  Text: typeof InputGroupText;
};

const InputGroup: InputGroupComponent = ({ className, children, ...props }) => (
  <div
    className={classNames(className, 'input-group', 'flex flex-wrap items-stretch w-full relative')}
    {...props}
  >
    {children}
  </div>
);

InputGroup.Prepend = InputGroupPrepend;
InputGroup.Append = InputGroupAppend;
InputGroup.Text = InputGroupText;

export default InputGroup;
