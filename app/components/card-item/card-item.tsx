import { useNavigate } from 'react-router-dom';

import './card-item.css';
import { Character } from '@/interfaces/api-types';
import { RenderError } from '../card-list/card-list';

type Props = {
  data: Character;
};

export function CardItem({ data }: Props) {
  const navigate = useNavigate();

  if (data.error) return <RenderError error="Character not found" />;

  const { image, name, status, gender, species, location } = data;

  return (
    <div className="card">
      <img src={image} alt={name} className="card-img" />
      <div className="card-content">
        <ul className="card-attributes">
          <li className="card-attribute">
            <h2 className="card-title">{name}</h2>
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
          data-testid="closeBtn"
          type="button"
          onClick={() => navigate('/')}
        >
          <img src="/x-mark.svg" alt="" className="logo logo-close" />
        </button>
      </div>
    </div>
  );
}
