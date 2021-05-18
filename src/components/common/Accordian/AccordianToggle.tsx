import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';
import AccordianContext from './AccordianContext';

interface AccordianToggleProps {
  className?: string;
  eventKey: string;
}

const AccordianToggle: React.FC<AccordianToggleProps> = ({ className, children, eventKey }) => {
  const { onSelect, key: currentKey } = React.useContext(AccordianContext);

  const handleClick = () => {
    onSelect(eventKey);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={classNames(
        'bg-gray-100 w-full text-left px-5 py-3',
        'flex items-center justify-between',
        eventKey === currentKey ? 'text-blue-500' : '',
        className,
      )}
    >
      <div>{children}</div>
      <FontAwesomeIcon icon={currentKey === eventKey ? faChevronUp : faChevronDown} />
    </button>
  );
};

export default AccordianToggle;
