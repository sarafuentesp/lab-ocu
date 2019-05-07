import * as React from 'react';
import * as vm from '../viewModel';
import * as s from './subject.styles';

interface Props {
  subject: vm.Subject;
  className?: string;
  onUpdateSubject: (id: string, isSelected: boolean) => void;
}

export const Subject: React.StatelessComponent<Props> = props => (
  <s.Container className={props.className}>
    <s.NameContainer>
      <span>
        <strong>{props.subject.name}</strong>
      </span>
      <span>{props.subject.quarter}</span>
      <span>
        <strong>{props.subject.credits}</strong>
      </span>
      <input
        type="checkbox"
        checked={props.subject.isSelected}
        onChange={e =>
          props.onUpdateSubject(props.subject.id, e.target.checked)
        }
      />
    </s.NameContainer>
    <s.GroupContainer>
      <span>{props.subject.group}</span>
      <span>{props.subject.time}</span>
      <span>{props.subject.teacher}</span>
    </s.GroupContainer>
  </s.Container>
);
