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
      'text-sm',
      type === 'valid' && 'text-green-400',
      type === 'invalid' && 'text-red-400',
    )}
  >
    {children}
  </div>
));

export default FormControlFeedback;
