import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Home from './home';
import ErrorPage from './error-page';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
];

export const router = createBrowserRouter(routes);
