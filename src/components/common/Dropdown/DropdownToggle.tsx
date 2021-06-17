import React from 'react';
import Button, { ButtonProps } from '../Button';
import DropdownContext from './DropdownContext';

export interface DropdownToggleProps extends Omit<ButtonProps, 'onClick' | 'type'> {}

const DropdownToggle: React.FC<DropdownToggleProps> = ({ children, ...props }) => {
  const { onToggle, setReferenceElement } = React.useContext(DropdownContext);

  return (
    <Button type="button" ref={setReferenceElement} onClick={onToggle} {...props}>
      {children}
    </Button>
  );
};

export default DropdownToggle;
