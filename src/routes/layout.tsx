import { Outlet } from 'react-router-dom';

import Footer from '@/components/footer';
import Header from '@/components/header';
import global from '@styles/global.module.css';

export default function Layout() {
  return (
    <>
      <Header />
      <main className={global.container}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
