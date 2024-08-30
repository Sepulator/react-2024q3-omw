import { useRouter } from 'next/router';

export default function ErrorPage() {
  const router = useRouter();

  return (
    <main style={{ textAlign: 'center', marginTop: '8rem' }}>
      <h1 style={{ marginBottom: '2rem' }}>Oops, something went wrong</h1>
      <button className="btn" onClick={() => void router.push('/')}>
        Click to go Home Page
      </button>
    </main>
  );
}
