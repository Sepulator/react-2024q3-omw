import { Component } from 'react';

import Header from './components/header';
import CardList from './components/card-list';
import Footer from './components/footer';

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
        <Header onSearchChange={this.onSearchChange} />
        <CardList query={this.state.query} />
        <Footer />
      </>
    );
  }
}

export default App;
