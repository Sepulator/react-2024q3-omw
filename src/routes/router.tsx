import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Home from './home';
import ErrorPage from './error-page';
import Uncontrolled from '@/components/uncontrolled';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [{ path: 'uncontrolled', element: <Uncontrolled /> }],
  },
];

export const router = createBrowserRouter(routes);
