import React, { useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { Button } from '../../components/shared/button/Button';
import { OrderCreation } from '../../components/shared/orderCreation/OrderCreation';
import { PageTitle } from '../../components/shared/pageTitle/PageTitle';
import style from '../../../styles/MyOrder.module.scss';
import { useAppDispatch } from '../../../bll/store';
import { checkAuthUser } from '../../../bll/reducers/registration-reducer';
import { useSelector } from 'react-redux';
import { selectIsAuthUser } from '../../../bll/selectors/Selectors';

export const MyOrders = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuth = useSelector(selectIsAuthUser);
  useEffect(() => {
    debugger;
    if (localStorage.getItem('accessToken')) {
      console.log(localStorage, 'localStorage');
      dispatch(checkAuthUser());
    }
  }, []);

  if (!isAuth) {
    return <Navigate to={'/login'} />;
  }
  return (
    <div className={style.MyOrders}>
      <Button
        onClick={() => {
          // navigate('my_service')
          alert('hello');
        }}
        className={style.buttonMenu}
        title={'Меню'}
      />
      <OrderCreation />
      <div className={style.MyOrders__History}>
        <p>Мои заказы</p>
        <PageTitle className={style.title} title='Мои заказы' />
        <div className={style.ButtonHistory}>
          <button onClick={() => navigate('/basket')}>Заказы</button>
          <button onClick={() => navigate('history')}>История заказов</button>
        </div>
        <div className={style.create_an_order}>
          <p>У вас еще нет созданных услуг</p>
          <Button
            onClick={() => {
              navigate('my_service');
            }}
            className='create_button'
            title={'Создать услугу'}
          />
        </div>
      </div>
    </div>
  );
};
