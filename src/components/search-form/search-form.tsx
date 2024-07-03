import { Component } from 'react';
import './search-form.css';

export class SearchForm extends Component {
  render() {
    return (
      <form className="search-form">
        <input type="text" />
        <button className="btn">Search</button>
      </form>
    );
  }
}
