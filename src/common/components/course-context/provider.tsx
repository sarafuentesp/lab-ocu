import * as React from 'react';
import { updateElementFromArray } from '../../helpers/array';
import { Course, Subject } from '../../../pages/subject-selection/viewModel';
import { CourseContext } from './context';

export const CourseProvider: React.StatelessComponent = props => {
  const [courses, setCourses] = React.useState([] as Course[]);

  const onLoadCourses = (loadedCourses: Course[]) => {
    setCourses(loadedCourses);
  };

  const onUpdateCourse = (name: string) => (
    id: string,
    isSelected: boolean
  ) => {
    const course = courses.find(c => c.name === name);
    const subject = course.subjects.find(s => s.id === id);
    const updatedSubject = {
      ...subject,
      isSelected,
    };
    const updatedCourse: Course = {
      ...course,
      subjects: updateElementFromArray(
        course.subjects,
        updatedSubject,
        (s: Subject) => s.id === updatedSubject.id
      ),
    };

    setCourses(
      updateElementFromArray(
        courses,
        updatedCourse,
        (c: Course) => c.name === updatedCourse.name
      )
    );
  };

  return (
    <CourseContext.Provider
      value={{
        courses,
        onLoadCourses,
        onUpdateCourse,
      }}
    >
      {props.children}
    </CourseContext.Provider>
  );
};
