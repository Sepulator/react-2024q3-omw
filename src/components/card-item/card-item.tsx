import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';

import close from '@assets/x-mark.svg';
import './card-item.css';
import { LoaderSpinner } from '../card-list/card-list';
import { LoaderCharacter } from '@/services/api-service';
import { useGetCharacterQuery } from '@/services/rickandmorty-api';

export function CardItem() {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const { id } = useLoaderData() as LoaderCharacter;
  const { data } = useGetCharacterQuery(id);

  const isLoading =
    navigation.state === 'loading' &&
    navigation.location?.pathname.includes('/character/');

  if (!data || isLoading) return <LoaderSpinner />;
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
          <img src={close} alt="close button" className="logo logo-close" />
        </button>
      </div>
    </div>
  );
}
