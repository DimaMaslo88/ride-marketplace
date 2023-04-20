import React from 'react';
import { useFormik } from 'formik';
import { Input } from '../../form/Input';
import { Button } from '../shared/button/Button';
import style from '../../../styles/Login.module.scss';
import s from '../../../styles/utils/PhoneInput.module.scss';

import { PageTitle } from '../shared/pageTitle/PageTitle';

type FormikErrorType = {
  email?: string;
};
export const PasswordRecovery = () => {
  //const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate: (values) => {
      const errors: FormikErrorType = {};
      if (!values.email) {
        errors.email = 'Введите ваш email ';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Не корректный email ';
      }

      return errors;
    },
    onSubmit: (values) => {
      alert(values);
      formik.resetForm();
    },
  });

  return (
    <div className={style.loginContainer}>
      <div className={style.client}>
        <PageTitle title={'Вход'} className={style.pageTitle} />
        <p>Введите адрес электронной почты </p>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <Input
              placeholder='email'
              {...formik.getFieldProps('email')}
              className={`${s.inputProvider}`}
            />
          </div>
          <div>
            {formik.touched.email && formik.errors.email && (
              <div style={{ color: 'red' }}>{formik.errors.email}</div>
            )}
          </div>

          <Button title={'Отправить'} className={style.login_button} />
        </form>
      </div>
    </div>
  );
};
