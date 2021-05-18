import classNames from 'classnames';
import React from 'react';
import FormContext from './FormContext';

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  isValid?: boolean;
  isInvalid?: boolean;
  plaintext?: boolean;
}

type FormSelectComponent = React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLSelectElement> & FormSelectProps
>;

const FormSelect: FormSelectComponent = React.forwardRef(
  ({ className, id, isValid, isInvalid, plaintext, ...props }, ref) => {
    const { controlId } = React.useContext(FormContext);

    return (
      <select
        {...props}
        ref={ref}
        id={id || controlId}
        className={classNames(
          className,
          'block bg-white w-full rounded-lg px-3 py-1',
          'focus:outline-none focus:ring-2',
          plaintext ? 'border-0' : 'border',
          isInvalid && 'ring-red-400 border-red-400',
          isValid && 'ring-green-400 border-green-400',
        )}
      />
    );
  },
);

export default FormSelect;
