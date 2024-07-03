import { Component } from 'react';
import { Header } from './components/header/header';
import { CardItem } from './components/card-item/card-item';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main className="container grid">
          <CardItem />
        </main>
      </>
    );
  }
}

export default App;
