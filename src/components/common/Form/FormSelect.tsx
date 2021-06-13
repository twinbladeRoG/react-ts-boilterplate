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
          'block bg-white w-full rounded px-4 py-2 transition',
          'focus:outline-none focus:ring-2',
          'bg-light dark:bg-dark dark:text-light',
          'focus:bg-light-light dark:focus:bg-dark-light',
          plaintext ? 'border-0' : '',
          isValid || isInvalid ? 'ring-2 border-2' : 'border',
          isInvalid && 'ring-danger border-danger',
          isValid && 'ring-success border-succring-success',
        )}
      />
    );
  },
);

export default FormSelect;
