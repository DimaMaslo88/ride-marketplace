import React, { ChangeEvent, useState } from 'react';

import style from '../styles/utils/PhoneInput.module.scss';
import s from '../styles/Login.module.scss';
import { Button } from '../ui/components/shared/button/Button';

import { LoginUser } from '../bll/reducers/registration-reducer';
import { useAppDispatch } from '../bll/store';

export const PhoneInput = () => {
  const [numberValue, setNumberValue] = useState<string>('');
  const dispatch = useAppDispatch();
  debugger;
  const disabledButton = numberValue.length < 10;
  const ChangePhoneNumberHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let phone = e.currentTarget.value;

    let formatNumber = phone.replace(/\D/, '');
    // phone.replace(/\D/g, '');
    // let completedNumber = '';

    if (!formatNumber) {
      return setNumberValue((e.currentTarget.value = ''));
    }

    // if (['7', '8', '9'].indexOf(formatNumber[0]) > -1) {
    //   // russian numbers
    //
    //   if (formatNumber[0] === '9') {
    //     return dispatch(enterPhoneNumber('7' + formatNumber.slice(1)));
    //   }
    //   let firstSymbol = formatNumber[0] === '7' ? '7' : '8';// в идеале
    //   //
    //   completedNumber = firstSymbol + '';
    //   if (formatNumber.length > 1) {
    //     completedNumber += '(' + formatNumber.substring(1, 4);
    //   }
    //   if (formatNumber.length >= 5) {
    //     completedNumber += ')' + formatNumber.substring(4, 7);
    //   }
    //   if (formatNumber.length >= 8) {
    //     completedNumber += '-' + formatNumber.substring(7, 9);
    //   }
    //   if (formatNumber.length >= 10) {
    //     completedNumber += '-' + formatNumber.substring(9, 11);
    //   }
    //   dispatch(enterPhoneNumber(completedNumber));
    // }
    else {
      return setNumberValue(formatNumber);
      // //not russian numbers
      // completedNumber = '+' + formatNumber.substring(0, 16);
      // return dispatch(enterPhoneNumber(completedNumber));
    }
  };
  const loginButton = () => {
    dispatch(LoginUser(numberValue));
    setNumberValue('');
  };

  return (
    <div className={style.input}>
      <input
        type='tel'
        className={style.inputWindow}
        value={numberValue}
        onChange={ChangePhoneNumberHandler}
        maxLength={11}
        placeholder='+7 (___) ___ __ __'
      />

      <Button
        onClick={loginButton}
        disabled={disabledButton}
        className={s.login_button}
        title={'Oтправить'}
      />
    </div>
  );
};
