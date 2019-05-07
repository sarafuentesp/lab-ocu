import * as React from 'react';
import { history } from '../../history';
import { routes } from '../../common/constants/routes';
import { DialogContext } from '../../common/components/dialog-context';
import { Dialog } from './dialog';

export const DialogContainer = () => {
  const { hasScholarship, onResponse } = React.useContext(DialogContext);

  const handleResponse = response => {
    onResponse(response);
    history.push(routes.subjectSelection);
  };

  return <Dialog hasScholarship={hasScholarship} onResponse={handleResponse} />;
};
