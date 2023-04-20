import React, { ChangeEvent, useEffect, useState } from 'react';
import { PageTitle } from '../../components/shared/pageTitle/PageTitle';
import style from '../../../styles/MyOrder.module.scss';
import { OrderCreation } from '../../components/shared/orderCreation/OrderCreation';
import { Input } from '../../form/Input';
import s from '../../../styles/CreateService.module.scss';
import { Select } from '../../form/Select';
import { Button } from '../../components/shared/button/Button';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectBurialPlace,
  selectDeceasedAddress,
  selectFuneralDate,
  selectIsAuthUser,
  selectNameOfDeceased,
  selectReligion,
} from '../../../bll/selectors/Selectors';
import { checkAuthUser } from '../../../bll/reducers/registration-reducer';
import { useAppDispatch } from '../../../bll/store';
import {
  setClientName,
  setDeceasedAddress,
  setFuneralDate,
} from '../../../bll/actions/client-service-action';

// const religion = ['христианство', 'мусульманство', 'иудаизм'];
// const places = ['Новосормовское кладбище', 'Великий погост', 'Кладбище'];
export const CreateService = () => {
  const isAuth = useSelector(selectIsAuthUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const name = useSelector(selectNameOfDeceased);
  const funeralDate = useSelector(selectFuneralDate);
  const religion = useSelector(selectReligion);
  const deceasedAddress = useSelector(selectDeceasedAddress);
  const burialPlace = useSelector(selectBurialPlace);
  //const [value, setValue] = useState<string>('');
  //const [dateValue, setDateValue] = useState<string>('');
  //const [addressValue, setAddressValue] = useState<string>('');
  const [religionValue, setReligionValue] = useState(religion[0]);
  const [placesValue, setPlacesValue] = useState(burialPlace[0]);
  useEffect(() => {
    // пробные действия,не работает сервак, не могу проверить!!!!!!!!!!!!1
    debugger;
    if (localStorage.getItem('accessToken')) {
      console.log(localStorage, 'localStorage');
      dispatch(checkAuthUser());
    }
  }, []);
  if (!isAuth) {
    return <Navigate to={'/login'} />;
  }
  const clientDataHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setClientName(e.currentTarget.value));
  };
  const addressChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setDeceasedAddress(e.currentTarget.value));
    // setAddressValue(e.currentTarget.value);
  };
  const dateHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFuneralDate(e.currentTarget.value));
  };

  return (
    <>
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
          <p>Создать услугу</p>
          <PageTitle
            className={style.title}
            title='Заявка на организацию похорон'
          />
          <div className={style.ButtonHistory}>
            <button
              onClick={() => {
                navigate('/basket/my_service');
              }}
            >
              Захоронение
            </button>
            <button onClick={() => {}}>Кремация</button>
          </div>
          <form className={s.createService}>
            <p>ФИО усопшего</p>
            <Input
              type={'text'}
              id={'client_data'}
              className={s.inputStyle}
              value={name}
              onChange={clientDataHandler}
            />
            <p>Дата похорон</p>
            <Input
              type={'date'}
              id={'date'}
              className={s.inputStyle}
              value={funeralDate}
              onChange={dateHandler}
            />
            <p>Вероисповедание</p>
            <Select
              options={religion}
              value={religionValue}
              onChangeOption={setReligionValue}
              className={s.inputStyle}
            />
            <p>Адрес усопшего</p>
            <Input
              type={'text'}
              id={'address'}
              className={s.inputStyle}
              value={deceasedAddress}
              onChange={addressChangeHandler}
            />
            <p>Место захоронения</p>
            <Select
              options={burialPlace}
              value={placesValue}
              onChangeOption={setPlacesValue}
              className={s.inputStyle}
            />
            <div className={s.buttongroup}>
              <NavLink className={s.nav} to={'/basket'}>
                Назад
              </NavLink>
              <Button
                onClick={() => {
                  navigate('basic_service');
                }}
                className={s.loginButton}
                title={'Далее'}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
