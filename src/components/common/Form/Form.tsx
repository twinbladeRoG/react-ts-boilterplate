import React from 'react';
import FormCheck from './FormCheck';
import FormControl from './FormControl';
import FormGroup from './FormGroup';
import FormLabel from './FormLabel';
import FormText from './FormText';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

type FormComponent = React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLFormElement> & FormProps
> & {
  Group: typeof FormGroup;
  Label: typeof FormLabel;
  Control: typeof FormControl;
  Text: typeof FormText;
  Check: typeof FormCheck;
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
Form.Text = FormText;
Form.Check = FormCheck;

export default Form;
