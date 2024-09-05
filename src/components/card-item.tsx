'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import s from '@/styles/card-item.module.css';
import { LoaderSpinner, RenderError } from './card-list';
import { Character } from '@/interfaces/api-types';

type Props = {
  character: Character | null;
};

export default function CardItem({ character }: Props) {
  const router = useRouter();

  if (!character) return <LoaderSpinner />;
  if (character?.error) return <RenderError error="Character not found" />;

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
          className={`btn ${s.btnClose}`}
          data-testid="closeBtn"
          type="button"
          onClick={() => void router.push('/')}
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
