import { Placement } from '@popperjs/core';
import classNames from 'classnames';
import React from 'react';
import { usePopper } from 'react-popper';
import Button from '../Button';

interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'left' | 'middle' | 'right';
  drop?: 'up' | 'left' | 'right' | 'down';
}

const Dropdown: React.FC<DropdownProps> = ({ align, drop }) => {
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
      { name: 'offset', options: { offset: [6, 6] } },
      { name: 'hide', enabled: true },
    ],
    placement: getPopperPlacement(),
  });

  const [showPopper, setShowPopper] = React.useState(false);
  const toggle = () => setShowPopper(!showPopper);

  return (
    <div>
      <Button type="button" ref={setReferenceElement} onClick={toggle}>
        Reference element
      </Button>

      <div
        ref={setPopperElement}
        style={styles.popper}
        className={classNames(
          'p-5 bg-black text-white shadow-xl rounded-lg',
          showPopper ? '' : 'invisible pointer-events-none',
        )}
        {...attributes.popper}
      >
        Popper element
        <div ref={setArrowElement} style={styles.arrow} />
      </div>
    </div>
  );
};

export default Dropdown;
