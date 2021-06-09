import classNames from 'classnames';
import React from 'react';
import AccordianCollapse from './AccordianCollapse';
import AccordianContext from './AccordianContext';
import AccordianToggle from './AccordianToggle';

type AccordianProps = React.FC<{
  defaultKey: string;
  className?: string;
  multiple?: boolean;
  scrollOnOpen?: boolean;
}> & {
  Toggle: typeof AccordianToggle;
  Collapse: typeof AccordianCollapse;
};

const Accordian: AccordianProps = ({ defaultKey, children, className, multiple, scrollOnOpen }) => {
  const [key, setKey] = React.useState<Array<string> | string | null>(null);

  const handleKeyChange = (value: string) => {
    if (multiple) {
      if (Array.isArray(key)) {
        if (key.includes(value)) {
          setKey(key.filter(i => i !== value));
        } else {
          setKey([...key, value]);
        }
      }
    } else if (value === key) {
      setKey(null);
    } else {
      setKey(value);
    }
  };

  React.useEffect(() => setKey(multiple ? [defaultKey] : defaultKey), [defaultKey, multiple]);

  return (
    <AccordianContext.Provider
      value={{
        key,
        onSelect: handleKeyChange,
        multiple: Boolean(multiple),
        scrollOnOpen: Boolean(scrollOnOpen),
      }}
    >
      <div
        className={classNames(className, 'bg-white dark:bg-dark-dark rounded-xl overflow-hidden')}
      >
        {children}
      </div>
    </AccordianContext.Provider>
  );
};

Accordian.defaultProps = {
  defaultKey: '',
  className: '',
  multiple: false,
  scrollOnOpen: false,
};

Accordian.Toggle = AccordianToggle;
Accordian.Collapse = AccordianCollapse;

export default Accordian;
