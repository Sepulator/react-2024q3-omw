import { useRouter } from 'next/router';

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <main style={{ textAlign: 'center', marginTop: '8rem' }}>
      <h1 style={{ marginBottom: '2rem' }}>Page Not Found</h1>
      <details
        style={{
          whiteSpace: 'pre-wrap',
          fontSize: '16px',
          marginBottom: '2rem',
        }}
      >
        404
      </details>
      <button
        className="btn btn-round"
        style={{ padding: '2rem' }}
        onClick={() => void router.push('/')}
      >
        Click to go Home Page
      </button>
    </main>
  );
}
