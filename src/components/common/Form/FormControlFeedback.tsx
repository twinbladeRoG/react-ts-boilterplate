import classNames from 'classnames';
import React from 'react';

interface FormControlFeedbackProps extends React.HTMLAttributes<HTMLDivElement> {
  type: 'valid' | 'invalid';
}

type FormControlFeedbackComponent = React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLDivElement> & FormControlFeedbackProps
>;

const FormControlFeedback: FormControlFeedbackComponent = React.forwardRef<
  HTMLDivElement,
  FormControlFeedbackProps
>(({ className, children, type, ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    className={classNames(
      className,
      'text-sm mt-1',
      type === 'valid' && 'text-success',
      type === 'invalid' && 'text-danger',
    )}
  >
    {children}
  </div>
));

export default FormControlFeedback;
