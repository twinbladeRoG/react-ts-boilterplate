import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';
import AccordianContext from './AccordianContext';

interface AccordianToggleProps {
  className?: string;
  eventKey: string;
}

const AccordianToggle: React.FC<AccordianToggleProps> = ({ className, children, eventKey }) => {
  const { onSelect, key: currentEventKey, multiple } = React.useContext(AccordianContext);

  const handleClick = () => {
    onSelect(eventKey);
  };

  const checkIfOpened = React.useCallback(() => {
    if (multiple) {
      return currentEventKey?.includes(eventKey);
    }

    return currentEventKey === eventKey;
  }, [eventKey, currentEventKey, multiple]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className={classNames(
        'bg-light dark:bg-dark-light w-full text-left px-5 py-3',
        'flex items-center justify-between',
        checkIfOpened() ? 'text-blue-500' : '',
        className,
      )}
    >
      <span>{children}</span>
      <FontAwesomeIcon
        icon={faChevronUp}
        className={classNames(
          'transition-transform transform',
          checkIfOpened() ? 'rotate-180' : '',
        )}
      />
    </button>
  );
};

export default AccordianToggle;
