import { router } from '@routes/router';
import { RouterProvider } from 'react-router-dom';

export default function AllProviders() {
  return <RouterProvider router={router} />;
}
