import React from 'react';
import TabButton from './TabButton';
import TabContext from './TabContext';
import TabPane from './TabPane';

interface TabProps {
  activeKey: string | number;
}

type TabComponent = React.ElementType<TabProps> & {
  Button: typeof TabButton;
  Pane: typeof TabPane;
};

const Tab: TabComponent = ({ children, activeKey }) => {
  const [key, setKey] = React.useState<string | number | null | undefined>(null);

  React.useEffect(() => setKey(activeKey), [activeKey]);

  return <TabContext.Provider value={{ key, setKey }}>{children}</TabContext.Provider>;
};

Tab.Button = TabButton;
Tab.Pane = TabPane;

export default Tab;
