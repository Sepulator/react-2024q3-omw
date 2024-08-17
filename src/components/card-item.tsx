import { FormValue } from '@/libs/interfaces';

import logo from '@assets/logo.webp';
import s from '@styles/card-item.module.css';

export function CardItem({ age, country, email, gender, name }: FormValue) {
  return (
    <div className={s.card}>
      <img src={logo} alt={name} className={s.cardImg} />
      <div className={s.cardContent}>
        <ul className={s.cardAttributes}>
          <li className={s.cardAttribute}>
            <h2 className={s.cardTitle}>{name}</h2>
            <p>
              {age + 'y.'} &mdash; {gender}
            </p>
          </li>
          <li className={s.cardAttribute}>
            <p className={s.subtitle}>Country:</p>
            <p>{country}</p>
          </li>
          <li className={s.cardAttribute}>
            <p className={s.subtitle}>Email:</p>
            <p>{email}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
