import { ChangeEvent, Component, createRef, RefObject } from 'react';
import './search-form.css';

type Props = {
  onSearchChange: (query: string) => void;
};

export class SearchForm extends Component<Props> {
  inputRef: RefObject<HTMLInputElement>;

  constructor(props: Props) {
    super(props);
    this.inputRef = createRef<HTMLInputElement>();
  }

  onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = this.inputRef.current!.value;
    this.props.onSearchChange(query.toLowerCase().trim());
  };

  getLocalStorage = () =>
    (this.inputRef.current!.value = localStorage.getItem('query-text') || '');

  setLocalStorage = () =>
    localStorage.setItem('query-text', this.inputRef.current!.value);

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
          ref={this.inputRef}
        />
        <button className="btn">Search</button>
      </form>
    );
  }
}
