import classNames from 'classnames';
import React from 'react';
import FormContext from './FormContext';

interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  controlId?: string;
}

type FormGroupComponent = React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLDivElement> & FormGroupProps
>;

const FormGroup = React.forwardRef<HTMLDivElement, FormGroupProps>(
  ({ className, children, controlId, ...props }, ref) => {
    const context = React.useMemo(() => ({ controlId }), [controlId]);

    return (
      <FormContext.Provider value={context}>
        <div ref={ref} {...props} className={classNames(className, 'mb-5')}>
          {children}
        </div>
      </FormContext.Provider>
    );
  },
) as FormGroupComponent;

FormGroup.defaultProps = {
  controlId: undefined,
};

export default FormGroup;
