import { useNavigate, useParams } from 'react-router-dom';

import './card-item.css';
import Close from '@assets/x-mark.svg';
import { LoaderSpinner, RenderError } from '../card-list/card-list';
import { useGetCharacterQuery } from '@/services/rickandmorty-api';

export function CardItem() {
  const navigate = useNavigate();
  const { characterId = '1' } = useParams();
  const { data, isLoading, isFetching } = useGetCharacterQuery(characterId);

  if (isFetching || isLoading) return <LoaderSpinner />;
  if (!data) return <RenderError error="Character not found" />;

  const { image, name, status, gender, species, location } = data;

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
          onClick={() => navigate('/')}
        >
          <Close className="logo logo-close" />
        </button>
      </div>
    </div>
  );
}
