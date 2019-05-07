import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';
import { theme, global } from './styles';
import { Router } from './router';
import { DialogProvider } from './common/components/dialog-context';
import { CourseProvider } from './common/components/course-context';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Global styles={global} />
    <DialogProvider>
      <CourseProvider>
        <Router />
      </CourseProvider>
    </DialogProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
