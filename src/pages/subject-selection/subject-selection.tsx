import * as React from 'react';
import { Link } from 'react-router-dom';
import * as vm from './viewModel';
import { Course } from './components';
import { routes } from '../../common/constants/routes';

interface Props {
  courses: vm.Course[];
  onUpdateCourse: (name: string) => (id: string, isSelected: boolean) => void;
}

export const SubjectSelection: React.StatelessComponent<Props> = props => (
  <>
    <p>Tabs component</p>
    <p>Subject filter component</p>
    {props.courses.map(course => (
      <Course
        key={course.name}
        course={course}
        onUpdateCourse={props.onUpdateCourse}
      />
    ))}
    <Link to={routes.payment}>Go to payment</Link>
  </>
);
