import { useState } from 'react';
import CardList from '@/components/card-list';
import Footer from '@/components/footer';
import Header from '@/components/header';
import './main-page.css';
import { Outlet } from 'react-router-dom';

export function MainPage() {
  const [query, setQuery] = useState('');

  const onSearchChange = (query: string) => {
    setQuery(query);
  };

  return (
    <>
      <Header onSearchChange={onSearchChange} />
      <CardList query={query} />
      <Outlet />
      <Footer />
    </>
  );
}
