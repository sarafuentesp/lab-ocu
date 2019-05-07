import * as React from 'react';
import * as s from './menu.styles';

export const Menu = () => (
  <s.Menu>
    <li>
      <a href="#">English</a>
    </li>
    <li>
      <i className="fas fa-power-off" />
      <span>Cerrar sesión</span>
    </li>
  </s.Menu>
);
