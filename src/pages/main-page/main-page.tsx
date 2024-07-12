import { Outlet } from 'react-router-dom';

import CardList from '@/components/card-list';
import Footer from '@/components/footer';
import Header from '@/components/header';
import './main-page.css';

export function MainPage() {
  return (
    <>
      <Header />
      <main className="">
        <div>
          <CardList />
        </div>
        <div className="detail">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}
