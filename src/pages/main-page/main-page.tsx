import { useState } from 'react';
import CardList from '@/components/card-list';
import Footer from '@/components/footer';
import Header from '@/components/header';
import './main-page.css';

export function MainPage() {
  const [query, setQuery] = useState('');

  const onSearchChange = (query: string) => {
    setQuery(query);
  };

  return (
    <>
      <Header onSearchChange={onSearchChange} />
      <CardList query={query} />
      <Footer />
    </>
  );
}
