import classNames from 'classnames';
import React from 'react';
import { ColorVariant } from '../../../types';
import DropdownContext from './DropdownContext';

interface DropdownProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ColorVariant;
}

const DropdownItem: React.FC<DropdownProps> = ({
  variant,
  className,
  children,
  onClick,
  ...props
}) => {
  const { onToggle } = React.useContext(DropdownContext);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onToggle();
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      type="button"
      className={classNames(
        className,
        'px-5 py-3 block w-full transition-colors dark:text-light',
        `hover:bg-${variant} focus:bg-${variant} hover:bg-opacity-50 hover:text-${variant}-dark dark:hover:text-${variant}-dark`,
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

DropdownItem.defaultProps = {
  type: 'button',
  variant: 'primary',
};

export default DropdownItem;
