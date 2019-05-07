import * as React from 'react';
import * as s from './dialog.styles';

interface Props {
  hasScholarship: boolean;
  onResponse: (response: boolean) => void;
}

export const Dialog: React.StatelessComponent<Props> = props => (
  <s.Container>
    <s.NavItem>
      <s.Icon className="fas fa-angle-left" />
      <p>BECA DEL MINISTERIO</p>
    </s.NavItem>
    <s.Question>
      <s.QuestionText>BECAS</s.QuestionText>
      <s.QuestionText>
        ¿Has solicitado o vas a solicitar este curso la Beca de la Universidad?
      </s.QuestionText>
      <s.Response>
        <s.ResponseButton onClick={() => props.onResponse(true)}>
          Si
        </s.ResponseButton>
        <s.ResponseButton onClick={() => props.onResponse(false)}>
          No
        </s.ResponseButton>
      </s.Response>
    </s.Question>
    <s.NavItem>
      <s.Icon className="fas fa-angle-right" />
    </s.NavItem>
  </s.Container>
);
