import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from './common/constants/routes';
import { DialogContainer, SubjectSelectionContainer, Payment } from './pages';

export const Routes = () => (
  <Switch>
    <Route path={routes.dialog} component={DialogContainer} exact={true} />
    <Route path={routes.subjectSelection} component={SubjectSelectionContainer} />
    <Route path={routes.payment} component={Payment} />
  </Switch>
);
