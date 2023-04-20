import React from 'react';
import { Button } from '../../shared/button/Button';
import { OrderMenu } from '../orderMenu/OrderMenu';
import { OrderPrice } from '../orderPrice/OrderPrice';
import { OrderStatus } from '../orderStatus/OrderStatus';
import style from '../../../../styles/OrderCreation.module.scss';
import s from '../../../../styles/Button.module.scss';

export const OrderCreation = () => {
  return (
    <div className={style.OrderCreation}>
      <Button
        className={`${style.ButtonCreation} ${s.btn}`}
        onClick={() => {}}
        title={'Создать услугу'}
      />
      <OrderMenu />
      <OrderPrice />
      <OrderStatus />
    </div>
  );
};
