import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';

import './index.css';
import ErrorBoundary from './components/error-boundary/index.ts';
import MainPage from './pages/main-page/index.ts';
import ErrorPage from './pages/error-page/index.ts';
import CardItem from './components/card-item/index.ts';
import AllProviders from './components/all-providers/index.ts';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'character/:characterId',
        element: <CardItem />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

ReactDOM.createRoot(
  document.getElementById('root') || document.createElement('div')
).render(
  <React.StrictMode>
    <ErrorBoundary>
      <AllProviders>
        <RouterProvider router={router} />
      </AllProviders>
    </ErrorBoundary>
  </React.StrictMode>
);
