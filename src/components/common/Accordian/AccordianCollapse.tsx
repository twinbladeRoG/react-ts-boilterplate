import classNames from 'classnames';
import React from 'react';
import AccordianContext from './AccordianContext';

interface AccordianCollapseProps {
  className?: string;
  eventKey: string;
}

const AccordianCollapse: React.FC<AccordianCollapseProps> = ({ children, className, eventKey }) => {
  const { key: currentEventKey } = React.useContext(AccordianContext);

  return (
    <div
      className={classNames(
        className,
        'animate-height',
        'bg-white p-5 border',
        eventKey === currentEventKey ? 'h-full overflow-y-auto' : 'h-0 overflow-y-hidden',
      )}
    >
      {children}
    </div>
  );
};

export default AccordianCollapse;
