import { Outlet, useLocation } from 'react-router-dom';

import CardList from '@/components/card-list';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Basket from '@/components/basket';

export function MainPage() {
  const location = useLocation();
  const isPathCharacter = location.pathname.includes('/character/');

  return (
    <>
      <Header />
      <main className={`container ${isPathCharacter ? 'opened' : ''}`}>
        <div>
          <CardList />
        </div>
        <div>
          <Outlet />
        </div>
      </main>
      <Basket />
      <Footer />
    </>
  );
}
