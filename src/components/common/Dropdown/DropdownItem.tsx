import classNames from 'classnames';
import React from 'react';
import DropdownContext from './DropdownContext';

interface DropdownProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const DropdownItem: React.FC<DropdownProps> = ({
  className,
  children,
  type,
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
      type={type === 'reset' ? 'reset' : type === 'submit' ? 'submit' : 'button'}
      className={classNames(
        className,
        'px-5 py-3 block w-full transition-colors',
        'hover:bg-blue-400 focus:bg-blue-500 hover:text-white focus:text-white',
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
};

export default DropdownItem;
