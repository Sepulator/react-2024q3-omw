import s from '@/styles/card-list.module.css';

export default function LoaderSpinner() {
  return (
    <div>
      <div className={s.center}>
        <div className={s.loader} data-testid="loader"></div>
      </div>
    </div>
  );
}
