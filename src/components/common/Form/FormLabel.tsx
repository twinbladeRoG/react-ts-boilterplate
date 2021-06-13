import classNames from 'classnames';
import React from 'react';
import FormContext from './FormContext';

interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  controlId?: string | null;
}

type FormLabelComponent = React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLLabelElement> & FormLabelProps
>;

const FormLabel: FormLabelComponent = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className, children, htmlFor, ...props }, ref) => {
    const { controlId } = React.useContext(FormContext);

    return (
      <label
        ref={ref}
        {...props}
        htmlFor={htmlFor || controlId}
        className={classNames('font-medium dark:text-light', className)}
      >
        {children}
      </label>
    );
  },
);

export default FormLabel;
