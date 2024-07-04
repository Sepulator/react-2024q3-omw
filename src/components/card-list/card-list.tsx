import { Component } from 'react';
import CardItem from '@components/card-item';
import './card-list.css';
import { ApiService } from '@/services/api-service';
import { Character, Info } from '@/interfaces';
import { mockCharacters } from '@/assets/mock';

type Props = {
  query: string;
};

type State = {
  data: Info<Array<Character>>;
};

export class CardList extends Component<Props, State> {
  apiService = new ApiService();
  state: State = {
    data: {},
  };

  componentDidMount(): void {
    // this.apiService.getAllCharacters().then((data) => {
    //   this.setState({ data });
    // });

    this.setState({ data: mockCharacters });
  }

  // componentDidUpdate(
  //   prevProps: Readonly<Props>,
  //   prevState: Readonly<State>
  // ): void {
  //   if (this.props.query !== prevProps.query) {
  //   }
  // }

  renderItems(arr: Array<Character>) {
    return arr.map((character) => {
      return <CardItem character={character} key={character.id} />;
    });
  }

  filterItems(arr: Array<Character>, query: string) {
    return arr.filter(
      (character) =>
        character.name.toLocaleLowerCase().includes(query) ||
        character.species.toLocaleLowerCase().includes(query) ||
        character.location.name.toLocaleLowerCase().includes(query)
    );
  }

  render() {
    const characters = this.state.data.results;

    if (!characters) {
      return '';
    }

    const items = this.renderItems(characters);

    return <main className="container grid">{items}</main>;
  }
}
