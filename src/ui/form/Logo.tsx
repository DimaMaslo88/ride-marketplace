import React from 'react';
import logo from '../../image/logoW.svg';
import style from '../../styles/Header.module.scss';

export const Logo = () => {
  return (
    <p className={style.form_logo}>
      <a href={'https://rite-way.ru'}>
        <img src={logo} />
      </a>
    </p>
  );
};
