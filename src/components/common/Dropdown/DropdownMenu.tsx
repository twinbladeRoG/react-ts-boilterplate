import classNames from 'classnames';
import React from 'react';
import DropdownContext from './DropdownContext';

export interface DropdownMenuProps extends React.HTMLAttributes<HTMLDivElement> {}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ children, ...props }) => {
  const { visible, setPopperElement, setArrowElement, styles, attributes } =
    React.useContext(DropdownContext);

  return (
    <div
      ref={setPopperElement}
      style={styles.popper}
      className={classNames(
        'popper-container py-3 shadow-xl rounded-lg',
        'bg-white dark:bg-dark-dark',
        visible ? '' : 'invisible pointer-events-none',
      )}
      {...attributes.popper}
      {...props}
    >
      {children}
      <div ref={setArrowElement} style={styles.arrow} className="popper-arrow" />
    </div>
  );
};

export default DropdownMenu;
