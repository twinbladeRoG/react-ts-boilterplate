import React from 'react';
import AccordianCollapse from './AccordianCollapse';
import AccordianContext from './AccordianContext';
import AccordianToggle from './AccordianToggle';

type AccordianProps = React.FC<{
  defaultKey: string;
  className?: string;
}> & {
  Toggle: typeof AccordianToggle;
  Collapse: typeof AccordianCollapse;
};

const Accordian: AccordianProps = ({ defaultKey, children, className }) => {
  const [key, setKey] = React.useState<string | null>(null);
  const handleKeyChange = (value: string | null) => setKey(value);

  React.useEffect(() => setKey(defaultKey), [defaultKey]);

  return (
    <AccordianContext.Provider value={{ key, onSelect: handleKeyChange }}>
      <div className={className}>{children}</div>
    </AccordianContext.Provider>
  );
};

Accordian.Toggle = AccordianToggle;
Accordian.Collapse = AccordianCollapse;

export default Accordian;
