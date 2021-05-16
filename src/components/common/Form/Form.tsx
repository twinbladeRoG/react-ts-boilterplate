import React from 'react';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

type FormType = React.ForwardRefExoticComponent<React.RefAttributes<HTMLFormElement> & FormProps>;

const Form: FormType = React.forwardRef(({ className, children, ...props }, ref) => (
  <form ref={ref} className={className} {...props}>
    {children}
  </form>
));

export default Form;
