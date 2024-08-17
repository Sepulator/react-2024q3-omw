import { FormEvent, useState } from 'react';
import * as Yup from 'yup';

import styles from '@styles/form.module.css';
import global from '@styles/global.module.css';
import { placeholderDescription as d } from '@/libs/const';
import { FormErrors, FormValue } from '@/libs/interfaces';
import { schemaValidation } from '@/libs/schemaValidation';
import { useAppDispatch } from '@/libs/store-hooks';
import { addFormValue } from '@/libs/store';
import { useNavigate } from 'react-router-dom';

export default function Uncontrolled() {
  const [errors, setErrors] = useState<FormErrors>({});
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    setErrors({});
    const formData = new FormData(event.currentTarget);
    const formObject = Object.fromEntries(formData.entries());

    try {
      await schemaValidation.validate(formObject, { abortEarly: false });
      const upload = URL.createObjectURL(formObject.upload as File);
      dispatch(
        addFormValue({ ...(formObject as unknown as FormValue), upload })
      );
      navigate('/');
    } catch (validationErrors) {
      const newErrors: Record<string, string> = {};

      if (validationErrors instanceof Yup.ValidationError) {
        validationErrors.inner.forEach((error) => {
          if (error.path) {
            newErrors[error.path] = error.message;
          }
        });
      }
      setErrors(newErrors);
    }
  }

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
          <input id="name" type="text" name="name" placeholder={d[0]} />
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
          <input id="email" type="text" name="email" placeholder={d[2]} />
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
            list="countries"
            size={20}
          />
          <datalist id="countries">
            <option value="Russia" />
            <option value="USA" />
            <option value="Ukraine" />
            <option value="Uzbekistan" />
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
