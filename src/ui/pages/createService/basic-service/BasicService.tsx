import React, { useEffect } from 'react';
import { OrderCreation } from '../../../components/shared/orderCreation/OrderCreation';
import style from '../../../../styles/MyOrder.module.scss';
import { PageTitle } from '../../../components/shared/pageTitle/PageTitle';
import s from '../../../../styles/CreateService.module.scss';
import { useSelector } from 'react-redux';
import {
  selectBasicService,
  selectIsAuthUser,
} from '../../../../bll/selectors/Selectors';
import { BasicServiceType } from '../../../../bll/reducers/client-service-reducer';
import { Button } from '../../../../ui/components/shared/button/Button';
import { NavLink, useNavigate, Navigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../bll/store';
import { deleteClientServiceItem } from '../../../../bll/actions/client-service-action';
import { checkAuthUser } from '../../../../bll/reducers/registration-reducer';

export const BasicService = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const services = useSelector(selectBasicService);
  const isAuth = useSelector(selectIsAuthUser);
  const deleteServiceHandler = (id: string) => {
    dispatch(deleteClientServiceItem(id));
  };
  useEffect(() => {
    debugger;
    if (localStorage.getItem('accessToken')) {
      dispatch(checkAuthUser());
    }
  }, []);
  if (!isAuth) {
    return <Navigate to={'/login'} />;
  }
  return (
    <>
      <div className={style.MyOrders}>
        <OrderCreation />
        <div className={style.MyOrders__History}>
          <p>Создать услугу / Базовый набор</p>
          <PageTitle className={style.title} title='Базовый Набор Услуг' />
          <div className={s.createService}>
            <h4 style={{ paddingLeft: '30px' }}>В набор входит:</h4>
            <div className={s.serviceHeader}>
              <h4 className={s.serviceTitle}>Наименование</h4>
              <h4 className={s.serviceTitle}>Тип</h4>
              <h4 className={s.serviceTitle}>Описание</h4>
              <h4 className={s.serviceTitle}>Стоимость(руб.)</h4>
            </div>
            {services.map(
              ({
                id,
                title,
                pocketType,
                description,
                cost,
              }: BasicServiceType) => (
                <div key={id} className={s.serviceData}>
                  <input type='checkbox' className={s.checkbox} />
                  <div className={s.serviceDataTitle}>{title}</div>
                  <div className={s.serviceDataTitle}>{pocketType}</div>
                  <div className={s.serviceDataTitle}>{description}</div>
                  <div className={s.serviceDataTitle}>{cost}</div>
                  <div className={s.serviceBtn}>
                    <Button title='Изменить' className={s.btn} />
                    <button
                      onClick={() => deleteServiceHandler(id)}
                      style={{
                        border: 'none',
                        backgroundColor: 'white',
                        cursor: 'pointer',
                      }}
                    >
                      X
                    </button>
                  </div>
                </div>
              )
            )}
            <div className={s.button}>
              <Button title='+ Добавить услугу' className={s.btn} />
            </div>
            <div className={s.buttongroup}>
              <NavLink className={s.nav} to={'/basket/my_service'}>
                Назад
              </NavLink>
              <Button
                onClick={() => {
                  navigate('provider_list');
                }}
                className={s.loginButton}
                title={'Найти подходящее агенство'}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
