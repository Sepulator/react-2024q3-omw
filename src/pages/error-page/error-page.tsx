import {
  ErrorResponse,
  useRouteError,
  isRouteErrorResponse,
} from 'react-router-dom';

export function ErrorPage() {
  const error = useRouteError() as ErrorResponse;

  if (isRouteErrorResponse(error)) {
    return (
      <main style={{ textAlign: 'center', marginTop: '8rem' }}>
        <h1 style={{ marginBottom: '2rem' }}>
          {error.status} {error.statusText}
        </h1>
        <details
          style={{
            whiteSpace: 'pre-wrap',
            fontSize: '16px',
            marginBottom: '2rem',
          }}
        >
          {error.data}
        </details>
        <button
          className="btn btn-round"
          style={{ padding: '2rem' }}
          onClick={() => (window.location.href = '/')}
        >
          Click to go Home Page
        </button>
      </main>
    );
  } else {
    <main style={{ textAlign: 'center', marginTop: '8rem' }}>
      <h1 style={{ marginBottom: '2rem' }}>Oops, something went wrong</h1>
      <button className="btn" onClick={() => (window.location.href = '/')}>
        Click to go Home Page
      </button>
    </main>;
  }
}
