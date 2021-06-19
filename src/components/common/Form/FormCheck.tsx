import classNames from 'classnames';
import React from 'react';

export interface FormCheckProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: 'checkbox' | 'radio';
  inline?: boolean;
  label?: React.ReactNode;
  id: string;
}

export type FormCheckComponent = React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLInputElement> & FormCheckProps
>;

const FormCheck: FormCheckComponent = React.forwardRef(
  ({ className, type, label, inline, id, ...props }, ref) => (
    <div className={classNames(inline ? 'inline-block' : 'block')}>
      <input className={classNames(className)} type={type} ref={ref} id={id} {...props} />
      <label className={classNames('mx-2 cursor-pointer dark:text-white')} htmlFor={id}>
        {label}
      </label>
    </div>
  ),
);

FormCheck.defaultProps = {
  type: 'checkbox',
};
FormCheck.displayName = 'FormCheck';
export default FormCheck;
