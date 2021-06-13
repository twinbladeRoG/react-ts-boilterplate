import classNames from 'classnames';
import React from 'react';
import FormContext from './FormContext';

export interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isValid?: boolean;
  isInvalid?: boolean;
  plaintext?: boolean;
}

export type FormTextareaComponent = React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLTextAreaElement> & FormTextareaProps
>;

const FormTextarea: FormTextareaComponent = React.forwardRef(
  ({ id, className, isValid, isInvalid, plaintext, ...props }, ref) => {
    const { controlId } = React.useContext(FormContext);

    return (
      <textarea
        {...props}
        ref={ref}
        id={id || controlId}
        className={classNames(
          className,
          'form-control',
          'block w-full rounded-lg px-3 py-1 transition-colors',
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

export default FormTextarea;
