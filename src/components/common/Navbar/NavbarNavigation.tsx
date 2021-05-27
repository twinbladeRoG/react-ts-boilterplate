import classNames from 'classnames';
import React from 'react';
import {
  ENTERING,
  ENTERED,
  EXITING,
  EXITED,
  TransitionStatus,
} from 'react-transition-group/Transition';
import { Transition } from 'react-transition-group';
import NavbarContext from './NavbarContext';

interface NavbarNavigationProps extends React.HTMLAttributes<HTMLDivElement> {}

const duration: number = 300;

const defaultStyle = {
  transition: `max-height ${duration}ms ease-in-out`,
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

const NavbarNavigation: React.FC<NavbarNavigationProps> = ({ className, children, ...props }) => {
  const [open] = React.useContext(NavbarContext);
  const divRef = React.useRef<HTMLDivElement>(null);

  const getNavbar = (state: TransitionStatus) => (
    <div
      className={classNames(
        className,
        'overflow-hidden sm:overflow-visible',
        'sm:ml-6 absolute sm:static bg-gray-900 top-16 w-full sm:w-auto',
      )}
      ref={divRef}
      style={{
        ...defaultStyle,
        ...getTransitionStyle(state, divRef.current?.scrollHeight),
      }}
    >
      <div
        className="flex flex-col w-full sm:flex-row space-x-0 sm:space-x-4 rounded-lg sm:rounded-0"
        {...props}
      >
        {children}
      </div>
    </div>
  );

  return (
    <Transition in={open} timeout={duration}>
      {state => getNavbar(state)}
    </Transition>
  );
};

export default NavbarNavigation;
