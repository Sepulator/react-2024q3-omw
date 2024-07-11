import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import './index.css';
import ErrorBoundary from './components/error-boundary/index.ts';
import MainPage from './pages/main-page/index.ts';
import ErrorPage from './pages/error-page/index.ts';
import {
  characterLoader,
  getFilteredCharacters,
} from './services/api-service.ts';
import CardItemDetail from './components/card-item-detail/index.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
    loader: getFilteredCharacters,
    children: [
      {
        path: 'character/:characterId',
        element: <CardItemDetail />,
        loader: characterLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>
);
