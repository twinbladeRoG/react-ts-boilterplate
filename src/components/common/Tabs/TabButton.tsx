import classNames from 'classnames';
import React from 'react';
import TabContext from './TabContext';

interface TabButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick'> {
  eventKey: string | number;
}

type TabButtonComponent = React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLButtonElement> & TabButtonProps
>;

const TabButton: TabButtonComponent = React.forwardRef(
  ({ className, children, eventKey, ...props }, ref) => {
    const { key, setKey } = React.useContext(TabContext);

    const handleOnClick = () => setKey(eventKey);

    return (
      <button
        ref={ref}
        type="button"
        className={classNames(
          className,
          key === eventKey
            ? 'font-bold border-blue-500 bg-gray-100 rounded-t-md'
            : 'border-transparent',
          'px-4 py-2 border-b-4',
        )}
        onClick={handleOnClick}
        {...props}
      >
        {children}
      </button>
    );
  },
);

export default TabButton;
