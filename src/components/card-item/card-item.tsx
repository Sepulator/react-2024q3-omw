import { Component } from 'react';
import './card-item.css';
import { Character } from '@/interfaces';

type Props = {
  character: Character;
};

export class CardItem extends Component<Props, unknown> {
  render() {
    const { image, name, status, species, location } = this.props.character;

    return (
      <div className="card">
        <img src={image} alt={name} className="card-img" />
        <div className="card-content">
          <div className="card-title">{name}</div>
          <ul className="card-attributes">
            <li className="card-attribute">
              <span>
                Status: <strong>{status}</strong>
              </span>
            </li>
            <li className="card-attribute">
              <span>
                Species: <strong>{species}</strong>
              </span>
            </li>
            <li className="card-attribute">
              <span>
                Origin: <strong>{location.name}</strong>
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
