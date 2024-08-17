import styles from '@styles/form.module.css';
import global from '@styles/global.module.css';
import { placeholderDescription as d } from '@/libs/const';
import { useAppSelector } from '@/libs/store-hooks';
import { countriesList } from '@/libs/store';
import { FormErrors } from '@/libs/interfaces';
import { FormEventHandler } from 'react';

type Props = {
  errors: FormErrors;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

export default function RegisterForm({ errors, onSubmit }: Props) {
  const countries = useAppSelector(countriesList);

  return (
    <div className={styles.wrap}>
      <form
        className={styles.form}
        onSubmit={(event) => {
          event.preventDefault();
          void onSubmit(event);
        }}
      >
        <label
          htmlFor="name"
          className={`${styles.label} ${errors.name ? styles.error : ''}`}
        >
          {errors.name ? errors.name : 'Name'}
          <input
            id="name"
            type="text"
            name="name"
            placeholder={d[0]}
            autoComplete="on"
          />
        </label>
        <label
          htmlFor="age"
          className={`${styles.label} ${errors.age ? styles.error : ''}`}
        >
          {errors.age ? errors.age : 'Age'}
          <input id="age" type="text" name="age" placeholder={d[1]} />
        </label>
        <label
          htmlFor="email"
          className={`${styles.label} ${errors.email ? styles.error : ''}`}
        >
          {errors.email ? errors.email : 'Email'}
          <input
            id="email"
            type="text"
            name="email"
            placeholder={d[2]}
            autoComplete="on"
          />
        </label>
        <label
          htmlFor="password"
          className={`${styles.label} ${errors.password ? styles.error : ''}`}
        >
          {errors.password ? errors.password : 'Password'}
          <input
            id="password"
            type="password"
            name="password"
            placeholder={d[3]}
          />
        </label>
        <label
          htmlFor="repeat"
          className={`${styles.label} ${errors.repeat ? styles.error : ''}`}
        >
          {errors.repeat ? errors.repeat : 'Password'}
          <input id="repeat" type="password" name="repeat" placeholder={d[4]} />
        </label>
        <label
          htmlFor="country"
          className={`${styles.label} ${errors.country ? styles.error : ''}`}
        >
          {errors.country ? errors.country : 'Country'}
          <input
            id="country"
            type="search"
            name="country"
            placeholder={d[5]}
            autoComplete="on"
            list="countries"
          />
          <datalist id="countries" className={styles.datalist}>
            {countries.map((country, index) => (
              <option value={country} key={index}>
                {country}
              </option>
            ))}
          </datalist>
        </label>
        <div>
          <span
            className={`${styles.label} ${errors.gender ? styles.error : ''}`}
          >
            {errors.gender ? errors.gender : 'Gender'}
          </span>
          <div className={styles.radioWrap}>
            <label
              htmlFor="male"
              className={`${styles.labelCheck} ${errors.gender ? styles.error : ''}`}
            >
              <input id="male" type="radio" name="gender" value="male" />
              Male
            </label>
            <label
              htmlFor="female"
              className={`${styles.labelCheck} ${errors.gender ? styles.error : ''}`}
            >
              <input id="female" type="radio" name="gender" value="female" />
              Female
            </label>
            <label
              htmlFor="none"
              className={`${styles.labelCheck} ${errors.gender ? styles.error : ''}`}
            >
              <input id="none" type="radio" name="gender" value="none" />
              None
            </label>
          </div>
        </div>
        <div className={styles.fileWrap}>
          <span
            className={`${styles.label} ${errors.upload ? styles.error : ''}`}
          >
            {errors.upload ? errors.upload : 'Image file'}
          </span>
          <label
            htmlFor="upload"
            className={`${styles.labelFiles} ${errors.upload ? styles.error : ''}`}
          >
            {''}
            <input
              id="upload"
              type="file"
              name="upload"
              accept=".png, .jpg, .jpeg"
              className={styles.file}
            />
          </label>
        </div>
        <label
          htmlFor="accept"
          className={`${styles.labelCheck} ${errors.accept ? styles.error : ''}`}
        >
          <input id="accept" type="checkbox" name="accept" />
          {errors.accept ? errors.accept : 'Accept Terms and Conditions'}
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
