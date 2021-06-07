import classNames from 'classnames';
import React from 'react';
import { Transition } from 'react-transition-group';
import { ENTERING, ENTERED, EXITING, EXITED } from 'react-transition-group/Transition';
import AccordianContext from './AccordianContext';

interface AccordianCollapseProps {
  className?: string;
  eventKey: string;
}

const duration: number = 300;

const defaultStyle = {
  transition: `max-height ${duration}ms ease-in-out`,
  overflow: 'hidden',
  maxHeight: 0,
};

const getTransitionStyle = (state: string | null, height = 0) => {
  switch (state) {
    case ENTERING:
      return { maxHeight: `${height}px` };
    case ENTERED:
      return { maxHeight: `${height}px` };
    case EXITING:
      return { maxHeight: 0 };
    case EXITED:
      return { maxHeight: 0 };
    default:
      return { maxHeight: 0 };
  }
};

const AccordianCollapse: React.FC<AccordianCollapseProps> = ({ children, className, eventKey }) => {
  const { key: currentEventKey, scrollOnOpen, multiple } = React.useContext(AccordianContext);

  const divRef = React.useRef<HTMLDivElement>(null);
  const checkIfOpened = React.useCallback(() => {
    if (multiple) {
      return currentEventKey?.includes(eventKey);
    }

    return currentEventKey === eventKey;
  }, [eventKey, currentEventKey, multiple]);

  const scroll = () => {
    if (checkIfOpened() && scrollOnOpen) {
      window.scrollTo({
        top: (divRef.current?.scrollHeight ?? 0) + 100,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Transition in={checkIfOpened()} timeout={duration} onEntered={scroll} nodeRef={divRef}>
      {state => (
        <div
          ref={divRef}
          style={{
            ...defaultStyle,
            ...getTransitionStyle(state, divRef.current?.scrollHeight),
          }}
        >
          <div className={classNames(className, 'bg-white border p-7')}>{children}</div>
        </div>
      )}
    </Transition>
  );
};

export default AccordianCollapse;
