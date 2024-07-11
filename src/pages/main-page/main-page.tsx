import { Outlet } from 'react-router-dom';

import CardList from '@/components/card-list';
import Footer from '@/components/footer';
import Header from '@/components/header';
import './main-page.css';

export function MainPage() {
  return (
    <>
      <Header />
      <main>
        <CardList />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
