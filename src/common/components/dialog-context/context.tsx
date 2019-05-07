import * as React from 'react';

interface Context {
  hasScholarship: boolean;
  onResponse: (response: boolean) => void;
}

export const DialogContext = React.createContext<Context>(null)
