import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import * as s from './nav.styles';
import { routes } from '../../constants/routes';

interface Props {
  className?: string;
}

const InnerNav: React.StatelessComponent<Props & RouteComponentProps> = ({
  className,
  location: { pathname },
}) => (
  <s.Container className={className}>
    <s.NavItem
      active={pathname === routes.dialog}
      visited={pathname !== routes.dialog}
    >
      <s.Icon className="fas fa-bars" />
      <s.Title>configuración</s.Title>
    </s.NavItem>
    <s.NavItem
      active={pathname === routes.subjectSelection}
      visited={
        pathname !== routes.subjectSelection && pathname !== routes.dialog
      }
    >
      <s.Title>asignaturas</s.Title>
    </s.NavItem>
    <s.NavItem active={pathname === routes.payment} visited={false}>
      <s.Title>pagos</s.Title>
    </s.NavItem>
    <s.NavItem active={false} visited={false}>
      <s.Title>fin del proceso</s.Title>
    </s.NavItem>
  </s.Container>
);

export const Nav = withRouter(InnerNav);
