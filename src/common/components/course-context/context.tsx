import * as React from 'react';
// TODO: Replace model by viewModel
import { Course } from '../../../pages/subject-selection/viewModel';

interface Context {
  courses: Course[];
  onLoadCourses: (courses: Course[]) => void;
  onUpdateCourse: (name: string) => (id: string, isSelected: boolean) => void;
}

export const CourseContext = React.createContext<Context>(null);
