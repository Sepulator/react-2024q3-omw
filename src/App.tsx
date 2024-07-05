import { Component } from 'react';

import Header from './components/header';
import CardList from './components/card-list';

class App extends Component {
  state = {
    query: '',
  };

  onSearchChange = (query: string) => {
    this.setState({ query });
  };

  render() {
    return (
      <>
        {' '}
        <Header onSearchChange={this.onSearchChange} />
        <CardList query={this.state.query} />
      </>
    );
  }
}

export default App;
