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
        'overflow-auto',
        eventKey === currentEventKey ? 'h-full' : 'h-0',
      )}
    >
      {children}
    </div>
  );
};

export default AccordianCollapse;
