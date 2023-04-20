import React from 'react';
import { useFormik } from 'formik';
import { Input } from '../../form/Input';
import { Button } from '../shared/button/Button';
import style from '../../../styles/Login.module.scss';
import s from '../../../styles/utils/PhoneInput.module.scss';
import { PageTitle } from '../shared/pageTitle/PageTitle';
import { ProviderLogin } from '../../../bll/reducers/registration-provider-reducer';
import { useAppDispatch } from '../../../bll/store';
import { NavLink } from 'react-router-dom';

type FormikErrorType = {
  email?: string;
  password?: string;
};
export const UniversalLoginization = () => {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
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
      if (!values.password) {
        errors.password = 'Поле не может быть пустым';
      } else if (values.password.length < 4) {
        errors.password = 'Слишком короткий пароль';
      } else if (values.password.length > 16) {
        errors.password = 'Слишком длинный пароль';
      }
      return errors;
    },
    onSubmit: (values) => {
      dispatch(ProviderLogin(values));
      formik.resetForm();
    },
  });

  return (
    <div className={style.loginContainer}>
      <div className={style.Tabs_Login}>
        <div className={style.client}>
          <PageTitle title={'Вход'} className={style.pageTitle} />
          <p>Введите логин (email) и пароль для входа в личный кабинет </p>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <Input
                placeholder='login'
                {...formik.getFieldProps('email')}
                className={s.inputProvider}
              />
            </div>
            <div>
              {formik.touched.email && formik.errors.email && (
                <div style={{ color: 'red' }}>{formik.errors.email}</div>
              )}

              <Input
                placeholder='password'
                {...formik.getFieldProps('password')}
                className={s.inputProvider}
              />
            </div>
            {formik.touched.password && formik.errors.password && (
              <div style={{ color: 'red' }}>{formik.errors.password}</div>
            )}
            <NavLink
              to={'/login/recovery_password'}
              className={s.recoveryPassword}
            >
              Забыли пароль?
            </NavLink>
            <Button title={'Войти'} className={style.login_button} />
          </form>
        </div>
      </div>
    </div>
  );
};
