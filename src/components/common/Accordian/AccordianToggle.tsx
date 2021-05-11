import classNames from 'classnames';
import React from 'react';
import AccordianContext from './AccordianContext';

interface AccordianToggleProps {
  className?: string;
  eventKey: string;
}

const AccordianToggle: React.FC<AccordianToggleProps> = ({ className, children, eventKey }) => {
  const { onSelect } = React.useContext(AccordianContext);

  const handleClick = () => {
    onSelect(eventKey);
  };

  return (
    <button type="button" onClick={handleClick} className={classNames(className)}>
      {children}
    </button>
  );
};

export default AccordianToggle;
