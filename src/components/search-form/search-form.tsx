import { ChangeEvent, Component } from 'react';
import './search-form.css';

type Props = {
  onSearchChange: (query: string) => void;
};

export class SearchForm extends Component<Props> {
  onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = e.target.text.value.toLowerCase().trim();
    this.props.onSearchChange(query);
  };

  render() {
    return (
      <form className="search-form" onSubmit={this.onSubmit}>
        <input type="text" name="text" />
        <button className="btn">Search</button>
      </form>
    );
  }
}
