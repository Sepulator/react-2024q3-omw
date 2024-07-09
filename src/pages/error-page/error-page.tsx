import { useRouteError } from 'react-router-dom';

export function ErrorPage() {
  const error = useRouteError() as Error;
  console.log(error);
  return (
    <main style={{ textAlign: 'center', marginBottom: '80px' }}>
      <h1>Something went wrong.</h1>
      <details style={{ whiteSpace: 'pre-wrap', fontSize: '16px' }}>
        {error && error.toString()}
        <br />
        {error.message}
      </details>
      <button className="btn" onClick={() => (window.location.href = '/')}>
        Click to go Home Page
      </button>
    </main>
  );
}
