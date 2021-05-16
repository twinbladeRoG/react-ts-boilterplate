import classNames from 'classnames';
import React from 'react';
import FormContext from './FormContext';

interface FormControlBaseProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isValid?: boolean;
  isInvalid?: boolean;
  plaintext?: boolean;
}

type FormControlProps = React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLInputElement> & FormControlBaseProps
>;

const FormControl: FormControlProps = React.forwardRef(
  ({ className, type, id, isValid, isInvalid, plaintext, readOnly, ...props }, ref) => {
    const { controlId } = React.useContext(FormContext);

    return (
      <input
        {...props}
        ref={ref}
        type={type}
        id={id || controlId}
        readOnly={readOnly}
        className={classNames(
          className,
          'block w-full rounded-lg px-3 py-1',
          'focus:outline-none focus:ring-2',
          plaintext ? 'border-0' : 'border',
          isInvalid && 'ring-red-400',
          isValid && 'ring-green-400',
        )}
      />
    );
  },
);

export default FormControl;
