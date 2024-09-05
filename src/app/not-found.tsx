import Link from 'next/link';

export default function NotFound() {
  return (
    <main style={{ textAlign: 'center', marginTop: '8rem' }}>
      <h1 style={{ marginBottom: '2rem' }}>Not Found</h1>
      <Link href="/" className="btn">
        Click to go Home Page
      </Link>
    </main>
  );
}
