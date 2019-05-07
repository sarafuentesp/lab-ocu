import * as React from 'react';
import { DialogContext } from '../../common/components/dialog-context';
import { CourseContext } from '../../common/components/course-context';

export const Payment = () => {
  const { hasScholarship } = React.useContext(DialogContext);
  const { courses } = React.useContext(CourseContext);
  return (
    <div>
      <h1>Payment</h1>
      <span>
        ¿Ha solicitado beca? <strong>{hasScholarship ? 'Si' : 'No'}</strong>
      </span>
      <span>
        {courses.map(
          c =>
            c.subjects.some(s => s.isSelected) && (
              <>
                <p>
                  <strong>Curso: {c.name}</strong>
                </p>
                {c.subjects.map(s => s.isSelected && <p>{s.name}</p>)}
              </>
            )
        )}
      </span>
    </div>
  );
};
