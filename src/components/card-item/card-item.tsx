import { useLoaderData, useNavigate } from 'react-router-dom';

import { Character } from '@/interfaces';
import close from '@assets/x-mark.svg';
import './card-item.css';

export function CardItem() {
  const navigate = useNavigate();
  const character = useLoaderData() as Character;
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
        <button
          className="btn btn-close"
          type="button"
          onClick={() => navigate(-1)}
        >
          <img src={close} alt="close button" className="logo logo-close" />
        </button>
      </div>
    </div>
  );
}
