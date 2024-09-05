import Layout from '@/components/layout';

interface Props {
  searchParams: Record<string, string>;
}

export default function Home({ searchParams }: Props) {
  return <Layout params={searchParams} />;
}
