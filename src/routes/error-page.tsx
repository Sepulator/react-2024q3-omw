import {
  ErrorResponse,
  useRouteError,
  isRouteErrorResponse,
} from 'react-router-dom';

import styles from '@/styles/error-page.module.css';
import global from '@/styles/global.module.css';

export default function ErrorPage() {
  const error = useRouteError() as ErrorResponse;

  if (isRouteErrorResponse(error)) {
    return (
      <main className={styles.main}>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <details className={styles.details}>{error.data}</details>
        <button
          className={global.btnRound}
          style={{ padding: '2rem' }}
          onClick={() => (window.location.href = '/')}
        >
          Click to go Home Page
        </button>
      </main>
    );
  } else {
    <main className={styles.main}>
      <h1>Oops, something went wrong</h1>
      <button
        className={global.btnRound}
        style={{ padding: '2rem' }}
        onClick={() => (window.location.href = '/')}
      >
        Click to go Home Page
      </button>
    </main>;
  }
}
