import React from 'react';

interface DropdownContextProps {
  visible: boolean;
  onToggle(): void;
  setReferenceElement: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  setPopperElement: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  setArrowElement: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  styles: {
    [key: string]: React.CSSProperties;
  };
  attributes: {
    [key: string]:
      | {
          [key: string]: string;
        }
      | undefined;
  };
}

const DropdownContext = React.createContext<DropdownContextProps>({
  visible: false,
  onToggle() {},
  setReferenceElement() {},
  setPopperElement() {},
  setArrowElement() {},
  styles: {},
  attributes: {},
});

export default DropdownContext;
