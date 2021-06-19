import classNames from 'classnames';
import React from 'react';
import FormContext from './FormContext';
import FormControlFeedback from './FormControlFeedback';

export interface FormControlProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isValid?: boolean;
  isInvalid?: boolean;
  plaintext?: boolean;
}

export type FormControlComponent = React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLInputElement> & FormControlProps
> & {
  Feedback: typeof FormControlFeedback;
};

const FormControl = React.forwardRef(
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
          'form-control',
          'block w-full rounded px-4 py-2 transition-colors',
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
) as FormControlComponent;

FormControl.Feedback = FormControlFeedback;
FormControl.displayName = 'Form.Control';

export default FormControl;
