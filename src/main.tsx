import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import ErrorBoundary from './components/error-boundary/index.ts';
import MainPage from './pages/main-page/index.ts';
import ErrorPage from './pages/error-page/index.ts';
import CardItem from './components/card-item/index.ts';
import { characterLoader, charactersLoader } from './services/api-service.ts';
import AllProviders from './components/all-providers/index.ts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
    loader: charactersLoader,
    shouldRevalidate: ({ nextUrl }) => {
      return !nextUrl.pathname.includes('/character/');
    },
    children: [
      {
        path: 'character/:characterId',
        element: <CardItem />,
        loader: characterLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <AllProviders>
        <RouterProvider router={router} />
      </AllProviders>
    </ErrorBoundary>
  </React.StrictMode>
);
