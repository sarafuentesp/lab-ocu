import * as React from 'react';
import { useExpandable } from '../../../common/hooks/useExpandable';
import * as vm from '../viewModel';
import { Subject } from './subject';
import * as s from './course.styles';

const StyledSubject = s.Subject.withComponent(Subject);

interface Props {
  course: vm.Course;
  onUpdateCourse: (name: string) => (id: string, isSelected: boolean) => void;
}

export const Course: React.StatelessComponent<Props> = props => {
  const { isExpanded, onToggle } = useExpandable(true);

  const onUpdateSubject = (id: string, isSelected: boolean) => {
    props.onUpdateCourse(props.course.name)(id, isSelected);
  };

  return (
    <s.Container>
      <s.TitleContainer onClick={onToggle}>
        <s.Icon className={`fas fa-caret-${isExpanded ? 'down' : 'right'}`} />
        <s.Title>{props.course.name}</s.Title>
      </s.TitleContainer>
      {isExpanded &&
        props.course.subjects.map(subject => (
          <StyledSubject
            key={subject.id}
            subject={subject}
            onUpdateSubject={onUpdateSubject}
          />
        ))}
    </s.Container>
  );
};
