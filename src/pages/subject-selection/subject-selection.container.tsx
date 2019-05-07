import * as React from 'react';
import { CourseContext } from '../../common/components/course-context';
import { mockCourses } from './mockData';
import { SubjectSelection } from './subject-selection';

export const SubjectSelectionContainer = () => {
  const { courses, onLoadCourses, onUpdateCourse } = React.useContext(CourseContext);

  React.useEffect(() => {
    // TODO fetch from api
    onLoadCourses(mockCourses);
  }, []); // Only when component did mount

  return <SubjectSelection courses={courses} onUpdateCourse={onUpdateCourse} />;
};
