/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import styles from '@styles/form.module.css';
import global from '@styles/global.module.css';
import { placeholderDescription as d } from '@/libs/const';
import { schemaControlled } from '@/libs/schemaValidation';
import { FormInput } from '@/libs/interfaces';
import { useAppDispatch, useAppSelector } from '@/libs/store-hooks';
import { addFormValue, countriesList } from '@/libs/store';
import { useNavigate } from 'react-router-dom';

export default function Controlled() {
  const countries = useAppSelector(countriesList);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: yupResolver(schemaControlled),
  });

  const onSubmit = handleSubmit((data) => {
    const upload = URL.createObjectURL(data.upload[0]);
    const accept = 'On';
    const age = `${data.age}`;
    dispatch(addFormValue({ ...data, upload, age, accept }));
    navigate('/');
  });

  return (
    <div className={styles.wrap}>
      <form className={styles.form} onSubmit={onSubmit}>
        <label
          htmlFor="name"
          className={`${styles.label} ${errors.name ? styles.error : ''}`}
        >
          {errors.name ? errors.name.message : 'Name'}
          <input
            id="name"
            type="text"
            autoComplete="on"
            placeholder={d[0]}
            {...register('name')}
          />
        </label>
        <label
          htmlFor="age"
          className={`${styles.label} ${errors.age ? styles.error : ''}`}
        >
          {errors.age ? errors.age.message : 'Age'}
          <input id="age" type="text" placeholder={d[1]} {...register('age')} />
        </label>
        <label
          htmlFor="email"
          className={`${styles.label} ${errors.email ? styles.error : ''}`}
        >
          {errors.email ? errors.email.message : 'Email'}
          <input
            id="email"
            autoComplete="on"
            type="text"
            placeholder={d[2]}
            {...register('email')}
          />
        </label>
        <label
          htmlFor="password"
          className={`${styles.label} ${errors.password ? styles.error : ''}`}
        >
          {errors.password ? errors.password.message : 'Password'}
          <input
            id="password"
            type="password"
            placeholder={d[3]}
            {...register('password')}
          />
        </label>
        <label
          htmlFor="repeat"
          className={`${styles.label} ${errors.repeat ? styles.error : ''}`}
        >
          {errors.repeat ? errors.repeat.message : 'Password'}
          <input
            id="repeat"
            type="password"
            placeholder={d[4]}
            {...register('repeat')}
          />
        </label>
        <label
          htmlFor="country"
          className={`${styles.label} ${errors.country ? styles.error : ''}`}
        >
          {errors.country ? errors.country.message : 'Country'}
          <input
            id="country"
            type="search"
            placeholder={d[5]}
            autoComplete="on"
            list="countries"
            {...register('country')}
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
            {errors.gender ? errors.gender.message : 'Gender'}
          </span>
          <div className={styles.radioWrap}>
            <label
              htmlFor="male"
              className={`${styles.labelCheck} ${errors.gender ? styles.error : ''}`}
            >
              <input
                id="male"
                type="radio"
                value="male"
                {...register('gender')}
              />
              Male
            </label>
            <label
              htmlFor="female"
              className={`${styles.labelCheck} ${errors.gender ? styles.error : ''}`}
            >
              <input
                id="female"
                type="radio"
                value="female"
                {...register('gender')}
              />
              Female
            </label>
            <label
              htmlFor="none"
              className={`${styles.labelCheck} ${errors.gender ? styles.error : ''}`}
            >
              <input
                id="none"
                type="radio"
                value="none"
                {...register('gender')}
              />
              None
            </label>
          </div>
        </div>
        <div className={styles.fileWrap}>
          <span
            className={`${styles.label} ${errors.upload ? styles.error : ''}`}
          >
            {errors.upload ? errors.upload.message : 'Image file'}
          </span>
          <label
            htmlFor="upload"
            className={`${styles.labelFiles} ${errors.upload ? styles.error : ''}`}
          >
            {''}
            <input
              id="upload"
              type="file"
              accept=".png, .jpg, .jpeg"
              className={styles.file}
              {...register('upload')}
            />
          </label>
        </div>
        <label
          htmlFor="accept"
          className={`${styles.labelCheck} ${errors.accept ? styles.error : ''}`}
        >
          <input id="accept" type="checkbox" {...register('accept')} />
          {errors.accept
            ? errors.accept.message
            : 'Accept Terms and Conditions'}
        </label>
        <div className={styles.btnWrap}>
          <button aria-label="reset" className={global.btnRound} type="reset">
            Reset
          </button>
          <button
            aria-label="submit"
            className={global.btnRound}
            type="submit"
            disabled={Object.keys(errors).length !== 0}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
