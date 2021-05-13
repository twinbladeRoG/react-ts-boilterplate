import React from 'react';

interface ModalContextType {
  onClose(): void;
}

const ModalContext = React.createContext<ModalContextType>({
  onClose() {},
});

export default ModalContext;
