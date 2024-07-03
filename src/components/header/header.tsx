import { Component, ReactNode } from 'react';
import logo from '@assets/logo.svg';
import { SearchForm } from '../search-form/search-form';
import './header.css';

export class Header extends Component {
  render(): ReactNode {
    return (
      <header>
        <a href="https://rickandmortyapi.com/">
          <img src={logo} alt="Rick and Morty logo" className="logo" />
        </a>
        <SearchForm />
      </header>
    );
  }
}
