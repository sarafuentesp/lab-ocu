import * as React from 'react';
import { Router as ReactRouter } from 'react-router-dom';
import { Routes } from './routes';
import { history } from './history';
import { App } from './app';

export const Router = () => (
  <ReactRouter history={history}>
    <App>
      <Routes />
    </App>
  </ReactRouter>
);
