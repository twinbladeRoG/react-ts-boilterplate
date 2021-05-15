import React from 'react';

interface AccordianContextProps {
  key: string | Array<string> | null;
  onSelect(value: string | null): void;
  multiple: boolean;
  scrollOnOpen: boolean;
}

const AccordianContext = React.createContext<AccordianContextProps>({
  key: null,
  onSelect() {},
  multiple: false,
  scrollOnOpen: false,
});

export default AccordianContext;
