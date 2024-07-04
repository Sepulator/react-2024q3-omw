import { Component } from 'react';
import './card-item.css';

export class CardItem extends Component {
  render() {
    return (
      <div className="card">
        <img
          src="./src/assets/1.jpeg"
          alt="Ricky and Morty"
          className="card-img"
        />
        <div className="card-content">
          <div className="card-title">Rick Sanchez</div>
          <ul className="card-attributes">
            <li className="card-attribute">
              <span>
                Status: <strong>Alive</strong>
              </span>
            </li>
            <li className="card-attribute">
              <span>
                Species: <strong>Human</strong>
              </span>
            </li>
            <li className="card-attribute">
              <span>
                Gender: <strong>Male</strong>
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
