import React from 'react';
import FormControl from './FormControl';
import FormGroup from './FormGroup';
import FormLabel from './FormLabel';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

type FormComponent = React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLFormElement> & FormProps
> & {
  Group: typeof FormGroup;
  Label: typeof FormLabel;
  Control: typeof FormControl;
};

const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ className, children, ...props }, ref) => (
    <form ref={ref} className={className} {...props}>
      {children}
    </form>
  ),
) as FormComponent;

Form.Group = FormGroup;
Form.Label = FormLabel;
Form.Control = FormControl;

export default Form;
