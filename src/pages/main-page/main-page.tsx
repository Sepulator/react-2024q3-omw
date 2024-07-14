import { Outlet, useLocation } from 'react-router-dom';

import CardList from '@/components/card-list';
import Footer from '@/components/footer';
import Header from '@/components/header';
import './main-page.css';

export function MainPage() {
  const location = useLocation();

  return (
    <>
      <Header />
      <main
        className={`container ${location.pathname.includes('/character/') ? 'opened' : ''}`}
      >
        <div className="main">
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
