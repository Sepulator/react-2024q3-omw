import './card-item.css';
import { Character } from '@/interfaces';

type Props = {
  character: Character;
};

export function CardItem({ character }: Props) {
  const { image, name, status, gender, species, location } = character;

  return (
    <div className="card">
      <img src={image} alt={name} className="card-img" />
      <div className="card-content">
        <ul className="card-attributes">
          <li className="card-attribute">
            <p className="card-title">{name}</p>
            <p>
              {status} &mdash; {species}
            </p>
          </li>
          <li className="card-attribute">
            <p className="subtitle">Gender:</p>
            <p>{gender}</p>
          </li>
          <li className="card-attribute">
            <p className="subtitle">Last known location:</p>
            <p>{location.name}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
