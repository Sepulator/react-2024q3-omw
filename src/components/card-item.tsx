import { FormValue } from '@/libs/interfaces';

import s from '@styles/card-item.module.css';

type Props = {
  formValue: FormValue;
};

export function CardItem({ formValue }: Props) {
  const { age, country, email, gender, name, upload } = formValue;

  return (
    <div className={s.card}>
      <img src={upload} alt={name} className={s.cardImg} />
      <div className={s.cardContent}>
        <ul className={s.cardAttributes}>
          <li className={s.cardAttribute}>
            <h2 className={s.cardTitle}>{name}</h2>
            <p>
              {age + ' y.'} &mdash; {gender}
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
