import { Placement } from '@popperjs/core';
import classNames from 'classnames';
import React from 'react';
import { usePopper } from 'react-popper';
import Button from '../Button';
import DropdownHeader from './DropdownHeader';

interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'left' | 'middle' | 'right';
  drop?: 'up' | 'left' | 'right' | 'down';
}

type DropdownComponent = React.FC<DropdownProps> & {
  Header: typeof DropdownHeader;
};

function useGetLatest<T>(value: T) {
  const ref = React.useRef<T>(value);
  ref.current = value;

  return React.useCallback(() => ref.current, []);
}

const Dropdown: DropdownComponent = ({ align, drop, children, className }) => {
  const [referenceElement, setReferenceElement] = React.useState<HTMLElement | null>(null);
  const [popperElement, setPopperElement] = React.useState<HTMLElement | null>(null);
  const [arrowElement, setArrowElement] = React.useState<HTMLElement | null>(null);

  const getPopperPlacement = React.useCallback((): Placement => {
    let position: Placement = 'bottom';

    switch (drop) {
      case 'up':
        position = 'top';
        break;
      case 'left':
        position = 'left';
        break;
      case 'right':
        position = 'right';
        break;
      default:
        break;
    }

    switch (align) {
      case 'left':
        position = `${position}-start` as Placement;
        break;
      case 'right':
        position = `${position}-end` as Placement;
        break;
      default:
        break;
    }

    return position;
  }, [align, drop]);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      { name: 'arrow', options: { element: arrowElement } },
      { name: 'offset', options: { offset: [0, 6] } },
      { name: 'hide', enabled: true },
    ],
    placement: getPopperPlacement(),
  });

  const [visible, setVisible] = React.useState(false);

  const getLatest = useGetLatest({
    open: visible,
    triggerRef: referenceElement,
    tooltipRef: popperElement,
  });

  const toggle = React.useCallback(() => {
    const { open } = getLatest();
    setVisible(!open);
  }, [getLatest]);

  const onBodyClick = React.useCallback(
    (ev: MouseEvent) => {
      const { triggerRef, tooltipRef } = getLatest();
      const { target } = ev;

      if (target instanceof Node) {
        if (
          tooltipRef != null &&
          triggerRef != null &&
          !tooltipRef.contains(target) &&
          !triggerRef.contains(target)
        ) {
          toggle();
        }
      }
    },
    [getLatest],
  );

  React.useEffect(() => {
    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, [popperElement]);

  return (
    <div>
      <Button
        type="button"
        ref={setReferenceElement}
        onClick={toggle}
        className={classNames(className)}
      >
        Reference element
      </Button>

      <div
        ref={setPopperElement}
        style={styles.popper}
        className={classNames(
          'popper-container py-3 bg-white shadow-xl rounded-lg border',
          visible ? '' : 'invisible pointer-events-none',
        )}
        {...attributes.popper}
      >
        {children}
        <div ref={setArrowElement} style={styles.arrow} className="popper-arrow" />
      </div>
    </div>
  );
};

Dropdown.Header = DropdownHeader;

export default Dropdown;
