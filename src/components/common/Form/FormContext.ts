import React from 'react';

interface FormContextType {
  controlId: string | undefined;
}

const FormContext = React.createContext<FormContextType>({
  controlId: undefined,
});

export default FormContext;
