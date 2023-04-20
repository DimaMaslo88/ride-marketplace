import React, { ChangeEvent, useEffect, useState } from 'react';
import style from '../../../styles/Login.module.scss';
import { PageTitle } from '../shared/pageTitle/PageTitle';
import { Input } from '../../form/Input';
import { Button } from '../shared/button/Button';
import { PhoneInput } from '../../../utils/PhoneInput';
import { useSelector } from 'react-redux';

import {
  selectPhoneNumber,
  selectSetPhoneNumber,
} from '../../../bll/selectors/Selectors';

import { setPhoneNumber } from '../../../bll/actions/registrationActions';
import { AuthUser } from '../../../bll/reducers/registration-reducer';
import { useAppDispatch } from '../../../bll/store';

export const Loginization = () => {
  const numberLogin = useSelector(selectSetPhoneNumber);
  const phoneNumber = useSelector(selectPhoneNumber);

  const dispatch = useAppDispatch();
  const [disableCode, setDisableCode] = useState(true);

  const [smsValue1, setSmsValue1] = useState('');
  const [smsValue2, setSmsValue2] = useState('');
  const [smsValue3, setSmsValue3] = useState('');
  const [smsValue4, setSmsValue4] = useState('');
  debugger;
  const inputChangeHandler1 = (e: ChangeEvent<HTMLInputElement>) => {
    setSmsValue1(e.currentTarget.value);
  };
  const inputChangeHandler2 = (e: ChangeEvent<HTMLInputElement>) => {
    setSmsValue2(e.currentTarget.value);
  };
  const inputChangeHandler3 = (e: ChangeEvent<HTMLInputElement>) => {
    setSmsValue3(e.currentTarget.value);
  };
  const inputChangeHandler4 = (e: ChangeEvent<HTMLInputElement>) => {
    setSmsValue4(e.currentTarget.value);
  };
  const code = smsValue1 + smsValue2 + smsValue3 + smsValue4;

  const passwordButton = () => {
    debugger;
    dispatch(AuthUser(phoneNumber, code));
    setSmsValue1('');
    setSmsValue2('');
    setSmsValue3('');
    setSmsValue4('');
  };

  useEffect(() => {
    if (smsValue1 && smsValue2 && smsValue3 && smsValue4) setDisableCode(false);
  }, [smsValue1, smsValue2, smsValue3, smsValue4]);

  const backToPhoneNumber = () => {
    dispatch(setPhoneNumber(false));
  };

  return (
    <div>
      {numberLogin ? (
        <div className={style.Tabs_Login}>
          <div className={style.client}>
            <PageTitle className={style.title} title='Введите код' />
            <p>На ваш телефон отправлен код. Подтвердите код из СМС.</p>
            <form className='code_input'>
              <Input
                value={smsValue1}
                onChange={inputChangeHandler1}
                type='text'
                id='phoneCode'
                maxLength={1}
                className={style.phoneCode}
              />
              <Input
                value={smsValue2}
                onChange={inputChangeHandler2}
                type='text'
                id='phoneCode'
                maxLength={1}
                className={style.phoneCode}
              />
              <Input
                value={smsValue3}
                onChange={inputChangeHandler3}
                type='text'
                id='phoneCode'
                maxLength={1}
                className={style.phoneCode}
              />
              <Input
                value={smsValue4}
                onChange={inputChangeHandler4}
                type='text'
                id='phoneCode4'
                maxLength={1}
                className={style.phoneCode}
              />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <p>Не пришел код?</p>
                <span
                  style={{
                    margin: '14px',
                    textDecoration: 'underline',
                    color: 'blue',
                    cursor: 'pointer',
                  }}
                  onClick={backToPhoneNumber}
                >
                  Ввести заново
                </span>
              </div>
              <Button
                type='submit'
                onClick={passwordButton}
                disabled={disableCode}
                className={style.login_button}
                title={'Войти'}
              />
            </form>
          </div>
        </div>
      ) : (
        <div className={style.Tabs_Login}>
          <div className={style.client}>
            <PageTitle className='title_client' title='Вход' />
            <p>Заполните поля для входа в аккаунт клиента.</p>
            <PhoneInput />
          </div>
        </div>
      )}
    </div>
  );
};
