import { createBrowserRouter, RouteObject } from 'react-router-dom';

import Home from './home';
import Layout from './layout';
import ErrorPage from './error-page';
import Uncontrolled from '@/components/uncontrolled';
import Controlled from '@/components/controlled';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'uncontrolled', element: <Uncontrolled /> },
      { path: 'controlled', element: <Controlled /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
