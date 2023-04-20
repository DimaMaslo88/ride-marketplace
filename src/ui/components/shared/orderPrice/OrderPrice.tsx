import React from 'react';
import style from '../../../../styles/OrderPrice.module.scss';
import s from '../../../../styles/Login.module.scss';
export const OrderPrice = () => {
  const price = '15600';
  const products = '0';

  return (
    <div className={style.OrderPrice}>
      <p className={s.title}>Cумма заказа</p>
      <div className={style.price}>{price} руб.</div>
      <div className='products'>
        <span className={style.total}>Всего: </span>
        <span className='products'>{products} товаров</span>
      </div>
    </div>
  );
};
