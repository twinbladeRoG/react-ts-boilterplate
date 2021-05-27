import classNames from 'classnames';
import React from 'react';
import TabContext from './TabContext';

interface TabPaneProps extends React.HTMLAttributes<HTMLDivElement> {
  eventKey: string | number;
}

const TabPane: React.FC<TabPaneProps> = ({ children, className, eventKey, ...props }) => {
  const { key } = React.useContext(TabContext);

  return (
    <div {...props} className={classNames(className, 'p-4', key === eventKey ? 'block' : 'hidden')}>
      {children}
    </div>
  );
};

export default TabPane;
