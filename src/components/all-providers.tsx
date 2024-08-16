import { store } from '@/libs/store';
import { router } from '@routes/router';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

export default function AllProviders() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  );
}
