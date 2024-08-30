import Image from 'next/image';
import { useRouter } from 'next/router';

import s from '@/styles/card-item.module.css';
import { LoaderSpinner, RenderError } from '../card-list/card-list';
import { Character } from '@/interfaces/api-types';

type Props = {
  character: Character;
};

export function CardItem({ character }: Props) {
  const router = useRouter();
  const query = router.asPath;

  if (character?.error) return <RenderError error="Character not found" />;
  if (!character) return <LoaderSpinner />;

  const { image, name, status, gender, species, location } = character;

  return (
    <div className={s.card}>
      <img src={image} alt={name} className={s.cardImg} />
      <div className={s.cardContent}>
        <ul className={s.cardAttributes}>
          <li className={s.cardAttribute}>
            <h2 className={s.cardTitle}>{name}</h2>
            <p>
              {status} &mdash; {species}
            </p>
          </li>
          <li className={s.cardAttribute}>
            <p className={s.subtitle}>Gender:</p>
            <p>{gender}</p>
          </li>
          <li className={s.cardAttribute}>
            <p className={s.subtitle}>Last known location:</p>
            <p>{location.name}</p>
          </li>
        </ul>
        <button
          className="btn btn-close"
          data-testid="closeBtn"
          type="button"
          onClick={() => void router.push(`/${query}`)}
        >
          <Image
            src="/x-mark.svg"
            alt="Close button"
            width={40}
            height={40}
            className={`logo ${s.logoClose}`}
          />
        </button>
      </div>
    </div>
  );
}
