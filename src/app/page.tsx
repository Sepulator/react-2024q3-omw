import Layout from '@/components/layout';
import LoaderSpinner from '@/components/loader';
import { Suspense } from 'react';

interface Props {
  searchParams: Record<string, string>;
}

export default function HomePage({ searchParams }: Props) {
  return (
    <Suspense key={searchParams.page} fallback={<LoaderSpinner />}>
      <Layout params={searchParams} />
    </Suspense>
  );
}
