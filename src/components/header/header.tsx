import { Component } from 'react';
import SearchForm from '@components/search-form';

import logo from '@assets/logo.svg';
import './header.css';

type Props = {
  onSearchChange: (query: string) => void;
};

export class Header extends Component<Props> {
  render() {
    return (
      <header className="mb-md">
        <a href="https://rickandmortyapi.com/">
          <img src={logo} alt="Rick and Morty logo" className="logo" />
        </a>
        <SearchForm onSearchChange={this.props.onSearchChange} />
      </header>
    );
  }
}
