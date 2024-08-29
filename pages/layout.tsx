import Footer from '@/components/footer';
import Header from '@/components/header';
import { ReactElement } from 'react';

type Props = {
  children: ReactElement;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
}
