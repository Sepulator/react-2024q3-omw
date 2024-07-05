import { ChangeEvent, Component, createRef, RefObject } from 'react';
import './search-form.css';

type Props = {
  onSearchChange: (query: string) => void;
};

export class SearchForm extends Component<Props> {
  input: RefObject<HTMLInputElement>;

  constructor(props: Props) {
    super(props);
    this.input = createRef<HTMLInputElement>();
  }

  onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = e.target.text.value.toLowerCase().trim();
    this.props.onSearchChange(query);
  };

  getLocalStorage = () =>
    (this.input.current!.value = localStorage.getItem('query-text') || '');

  setLocalStorage = () =>
    localStorage.setItem('query-text', this.input.current!.value);

  componentDidMount() {
    this.getLocalStorage();
    window.addEventListener('beforeunload', this.setLocalStorage);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.setLocalStorage);
  }

  onInput = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <form className="search-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Type name from Rick and Morty"
          ref={this.input}
        />
        <button className="btn">Search</button>
      </form>
    );
  }
}
