import * as React from 'react';
import * as s from './footer.styles';

interface Props {
  className?: string;
}

export const Footer: React.StatelessComponent<Props> = props => (
  <s.Container className={props.className}>
    <p>UXXI Académico</p>
    <p>By OCU</p>
  </s.Container>
);
