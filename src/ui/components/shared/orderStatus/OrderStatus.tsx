import React from 'react';
import { PageTitle } from '../pageTitle/PageTitle';
import progressLine from '../../../../image/Line1.svg';
import progress from '../../../../image/Ellipse9.svg';
import style from '../../../../styles/OrderStatus.module.scss';
import s from '../../../../styles/MyOrder.module.scss';

export const OrderStatus = () => {
  return (
    <div className={style.orderStatus}>
      <PageTitle className={s.title} title='Cтатус заказа' />
      <div className='progress'>
        <img className={style.progressLine} src={progressLine} />
        <img className={style.progressOne} src={progress} />
        <p>Сбор информации об усобшем</p>
        <img className={style.progressTwo} src={progress} />
        <p className={style.packageSelection}>Выбор пакета услуг и атрибутов</p>
        <img className={style.progressThree} src={progress} />
        <p>Выбор компании и оформление услуги</p>
      </div>
    </div>
  );
};
