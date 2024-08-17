import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { FormErrors, FormValue } from '@/libs/interfaces';
import { schemaUncontrolled } from '@/libs/schemaValidation';
import { useAppDispatch } from '@/libs/store-hooks';
import { addFormValue } from '@/libs/store';
import RegisterForm from './form';

export default function Uncontrolled() {
  const [errors, setErrors] = useState<FormErrors>({});
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    setErrors({});
    const formData = new FormData(event.currentTarget);
    const formObject = Object.fromEntries(formData.entries());

    try {
      await schemaUncontrolled.validate(formObject, { abortEarly: false });
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

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  return <RegisterForm errors={errors} onSubmit={onSubmit} />;
}
