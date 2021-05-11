import React from 'react';

interface AccordianContextProps {
  key: string | null;
  onSelect(value: string | null): void;
}
const AccordianContext = React.createContext<AccordianContextProps>({
  key: null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onSelect: value => {},
});

export default AccordianContext;
