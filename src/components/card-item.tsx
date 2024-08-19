import { FormValue } from '@/libs/interfaces';

import s from '@styles/card-item.module.css';

type Props = {
  formValue: FormValue;
  isActive: boolean;
};

export function CardItem({ formValue, isActive }: Props) {
  const { age, country, email, gender, name, upload } = formValue;

  const style = isActive ? `${s.card + ' ' + s.active}` : `${s.card}`;

  return (
    <div className={style}>
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
