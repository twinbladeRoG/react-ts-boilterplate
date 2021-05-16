import classNames from 'classnames';
import React from 'react';
import FormContext from './FormContext';

interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  controlId?: string | null;
}
const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className, children, htmlFor, ...props }, ref) => {
    const { controlId } = React.useContext(FormContext);

    return (
      <label
        ref={ref}
        {...props}
        htmlFor={htmlFor || controlId}
        className={classNames(className, 'inline-block mb-2')}
      >
        {children}
      </label>
    );
  },
);

export default FormLabel;
