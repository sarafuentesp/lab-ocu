import * as React from 'react';
import { DialogContext } from './context';

export const DialogProvider: React.StatelessComponent = props => {
  const [hasScholarship, setResponse] = React.useState(false);

  const onResponse = response => {
    setResponse(response);
  };
  return (
    <DialogContext.Provider
      value={{
        hasScholarship,
        onResponse,
      }}
    >
      {props.children}
    </DialogContext.Provider>
  );
};
