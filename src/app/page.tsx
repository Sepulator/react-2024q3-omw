import Layout from '@/components/layout';

interface Props {
  searchParams: Record<string, string>;
}

export default function HomePage({ searchParams }: Props) {
  return <Layout params={searchParams} />;
}
