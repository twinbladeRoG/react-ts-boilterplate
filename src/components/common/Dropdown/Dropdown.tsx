import { Placement } from '@popperjs/core';
import React from 'react';
import { usePopper } from 'react-popper';
import DropdownContext from './DropdownContext';
import DropdownHeader from './DropdownHeader';
import DropdownItem from './DropdownItem';
import DropdownMenu from './DropdownMenu';
import DropdownToggle from './DropdownToggle';

export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Set dropdown element alignment
   */
  align?: 'left' | 'middle' | 'right';
  /**
   * Set dropdown element position
   */
  drop?: 'up' | 'left' | 'right' | 'down';
}

export type DropdownComponent = React.FC<DropdownProps> & {
  Header: typeof DropdownHeader;
  Item: typeof DropdownItem;
  Toggle: typeof DropdownToggle;
  Menu: typeof DropdownMenu;
};

function useGetLatest<T>(value: T) {
  const ref = React.useRef<T>(value);
  ref.current = value;

  return React.useCallback(() => ref.current, []);
}

const Dropdown: DropdownComponent = ({ align, drop, children }) => {
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

  const handleOpen = React.useCallback(() => {
    const { open } = getLatest();
    if (!open) setVisible(true);
  }, [getLatest]);

  const handleClose = React.useCallback(() => {
    const { open } = getLatest();
    if (open) setVisible(false);
  }, [getLatest]);

  const toggle = React.useCallback(() => {
    const { open } = getLatest();
    if (open) handleClose();
    else handleOpen();
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
          handleClose();
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
    <DropdownContext.Provider
      value={{
        visible: getLatest().open,
        onToggle: toggle,
        setReferenceElement,
        setPopperElement,
        setArrowElement,
        styles,
        attributes,
      }}
    >
      <div>{children}</div>
    </DropdownContext.Provider>
  );
};

Dropdown.Header = DropdownHeader;
Dropdown.Item = DropdownItem;
Dropdown.Toggle = DropdownToggle;
Dropdown.Menu = DropdownMenu;

export default Dropdown;
