import * as React from 'react';
import { Menu } from './menu';
import * as s from './header.styles';
const logo = require('../../../content/images/logo.png');
import { useExpandable } from '../../hooks/useExpandable';

interface Props {
  className?: string;
}

export const Header: React.StatelessComponent<Props> = props => {
  const { isExpanded, onToggle } = useExpandable(false);

  return (
    <s.Container className={props.className}>
      <s.Logo src={logo} />
      <s.UserSession>
        <s.Certification>
          grado en economía <strong>matrícula 2019/2020</strong>
        </s.Certification>
        <s.User onClick={onToggle}>
          <p>Test user</p>
          <s.Icon className={`fas fa-caret-${isExpanded ? 'down' : 'right'}`} />
        </s.User>
        {isExpanded && <Menu />}
      </s.UserSession>
    </s.Container>
  );
};
