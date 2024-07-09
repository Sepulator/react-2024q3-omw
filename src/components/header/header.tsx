import { Component } from 'react';
import SearchForm from '@components/search-form';

import logo from '@assets/logo.svg';
import './header.css';

type Props = {
  onSearchChange: (query: string) => void;
};

type State = {
  isThrowError: boolean;
};

export class Header extends Component<Props, State> {
  state: State = {
    isThrowError: false,
  };
  render() {
    if (this.state.isThrowError) throw new Error('Check Error Boundary');

    return (
      <header className="mb-md">
        <div>
          <a href="https://rickandmortyapi.com/">
            <img src={logo} alt="Rick and Morty logo" className="logo" />
          </a>
        </div>
        <SearchForm onSearchChange={this.props.onSearchChange} />
        <button
          style={{ width: 'fit-content', justifySelf: 'end' }}
          className="btn btn-round"
          onClick={() => {
            this.setState({ isThrowError: true });
          }}
        >
          Throw Error
        </button>
      </header>
    );
  }
}
