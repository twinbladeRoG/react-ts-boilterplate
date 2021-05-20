import React from 'react';

interface DropdownContextProps {
  onToggle(): void;
}

const DropdownContext = React.createContext<DropdownContextProps>({
  onToggle() {},
});

export default DropdownContext;
