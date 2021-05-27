import React from 'react';

interface TabContextProps {
  key: string | number | null | undefined;
  setKey(k: string | number | null | undefined): void;
}
const TabContext = React.createContext<TabContextProps>({ key: null, setKey: () => {} });

export default TabContext;
