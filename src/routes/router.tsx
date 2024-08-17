import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Layout from './layout';
import ErrorPage from './error-page';
import Uncontrolled from '@/components/uncontrolled';
import Home from './home';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'uncontrolled', element: <Uncontrolled /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
