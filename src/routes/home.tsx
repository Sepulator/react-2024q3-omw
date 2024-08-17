import { useAppSelector } from '@/libs/store-hooks';

import { formValues } from '@/libs/store';
import { CardItem } from '@/components/card-item';
import s from '@styles/global.module.css';

export default function Home() {
  const items = useAppSelector(formValues);
  const setActive = (index: number) => items.length === index + 1;

  if (!items.length) return '';

  const renderItems = items.map((item, index) => (
    <CardItem formValue={item} key={index} isActive={setActive(index)} />
  ));

  return <div className={s.gridCards}>{renderItems}</div>;
}
