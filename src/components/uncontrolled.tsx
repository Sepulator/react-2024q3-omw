import { FormEvent } from 'react';

import styles from '@styles/form.module.css';
import global from '@styles/global.module.css';

const d = [
  'Type name',
  'Type age',
  'Type email',
  'Type password',
  'Repeat password',
  'Start typing county',
];

export default function Uncontrolled() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formObject = Object.fromEntries(formData.entries());
    console.log(formObject);
  }

  return (
    <div className={styles.wrap}>
      <form className={styles.form} onSubmit={onSubmit}>
        <label htmlFor="text" className={styles.label}>
          Name
          <input id="text" type="text" name="text" placeholder={d[0]} />
        </label>
        <label htmlFor="number" className={styles.label}>
          Age
          <input id="number" type="number" name="number" placeholder={d[1]} />
        </label>
        <label htmlFor="email" className={styles.label}>
          Email
          <input id="email" type="email" name="email" placeholder={d[2]} />
        </label>
        <label htmlFor="pass" className={styles.label}>
          Password
          <input id="pass" type="password" name="pass" placeholder={d[3]} />
        </label>
        <label htmlFor="repeat" className={styles.label}>
          Password
          <input id="repeat" type="password" name="repeat" placeholder={d[4]} />
        </label>
        <label htmlFor="file" className={styles.labelFile}>
          {''}
          <input
            id="file"
            type="file"
            name="file"
            accept=".png, .jpg, .jpeg"
            className={styles.file}
          />
        </label>
        <label htmlFor="city" className={styles.label}>
          Select country
          <input
            id="city"
            type="search"
            name="city"
            placeholder={d[5]}
            list="cities"
            size={20}
          />
          <datalist id="cities">
            <option value="Russia" />
            <option value="USA" />
            <option value="Ukraine" />
            <option value="Uzbekistan" />
          </datalist>
        </label>
        <label htmlFor="checkbox" className={styles.labelCheck}>
          <input id="checkbox" type="checkbox" name="checkbox" />
          Accept Terms and Conditions
        </label>
        <div className={styles.btnWrap}>
          <button aria-label="reset" className={global.btnRound} type="reset">
            Reset
          </button>
          <button aria-label="submit" className={global.btnRound} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
