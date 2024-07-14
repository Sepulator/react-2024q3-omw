import { Component } from 'react';
import './footer.css';

import rs_logo from '@assets/rs_school_js.svg';
import github from '@assets/github.svg';

export class Footer extends Component {
  date = new Date().getFullYear();
  render() {
    return (
      <footer className="mt-md">
        <a href="https://rs.school/">
          <img src={rs_logo} alt="RS School" className="logo" />
        </a>
        <p>&copy; {this.date}</p>
        <a href="https://github.com/Sepulator/">
          <img src={github} alt="RS School" className="logo" />
        </a>
      </footer>
    );
  }
}
