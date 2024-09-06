'use client';

import Link from 'next/link';

interface Props {
  error: Error & { digest?: string };
  reset?: () => void;
}

export default function ErrorPage({ error }: Props) {
  return (
    <main style={{ textAlign: 'center', marginTop: '8rem' }}>
      <h1 style={{ marginBottom: '2rem' }}>Oops, something went wrong</h1>
      <details
        style={{
          whiteSpace: 'pre-wrap',
          fontSize: '16px',
          marginBottom: '2rem',
        }}
      >
        {error.message}
      </details>
      <Link href="/" className="btn btn-round">
        Click to go Home Page
      </Link>
    </main>
  );
}
