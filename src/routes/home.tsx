import { useAppSelector } from '@/libs/store-hooks';

import { formValues } from '@/libs/store';
import { CardItem } from '@/components/card-item';
import s from '@styles/global.module.css';

export default function Home() {
  const items = useAppSelector(formValues);

  if (!items.length) return 'No items to display.';

  const renderItems = items.map((item, index) => (
    <CardItem formValue={item} key={index} />
  ));

  return <div className={s.gridCards}>{renderItems}</div>;
}
