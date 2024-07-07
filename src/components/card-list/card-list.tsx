import { Component } from 'react';
import './card-list.css';

import CardItem from '@components/card-item';
import { ApiService } from '@/services/api-service';
import { Character, Info } from '@/interfaces';

type Props = {
  query: string;
};

type State = {
  data: Info<Array<Character>>;
  loading: boolean;
};

export class CardList extends Component<Props, State> {
  apiService = new ApiService();
  state: State = {
    data: {},
    loading: true,
  };

  componentDidMount(): void {
    this.apiService
      .getAllCharacters()
      .then((data) => this.setState({ data, loading: false }));
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (this.props.query !== prevProps.query) {
      this.setState({ loading: true });
      this.apiService
        .getFilteredCharacters(this.props.query)
        .then((data) => this.setState({ data, loading: false }));
    }
  }

  renderItems(arr: Array<Character>) {
    return arr.map((character) => {
      return <CardItem character={character} key={character.id} />;
    });
  }

  render() {
    const { error, results } = this.state.data;

    if (error) {
      return (
        <main className="center">
          <h1>{error}</h1>
        </main>
      );
    }

    if (!results || this.state.loading) {
      return (
        <main>
          <div className="center">
            <div className="loader"></div>
          </div>
        </main>
      );
    }

    const items = this.renderItems(results);
    return (
      <main>
        <div className="container grid">{items}</div>
      </main>
    );
  }
}
