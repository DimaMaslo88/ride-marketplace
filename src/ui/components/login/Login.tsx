// import { Tabs } from 'antd';
import React from 'react';
import { PageTitle } from '../shared/pageTitle/PageTitle';
import style from '../../../styles/Login.module.scss';
import { Loginization } from '../../components/universal/Loginization';

// import { UniversalLoginization } from '../universal/ProviderLoginization';

import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Spinner from '../../../utils/spiner/Spinner';
import {
  selectIsAuthUser,
  selectIsOpenSpinner,
} from '../../../bll/selectors/Selectors';

// const { TabPane } = Tabs;

export const Login = () => {
  const openSpinner = useSelector(selectIsOpenSpinner);
  debugger;
  // const dispatch = useAppDispatch();
  const isAuth = useSelector(selectIsAuthUser);
  // const navigate = useNavigate();
  // const isInit = useSelector(isInitializeUser);
  // // const numberLogin = useSelector(selectSetPhoneNumber);

  // if (localStorage.getItem('accessToken')) {
  //   console.log(localStorage, 'Login local Storage');
  //   return <Navigate to={'/basket'} />;
  // }
  if (isAuth) {
    return <Navigate to={'/basket'} />;
  }
  if (openSpinner) {
    return <Spinner />;
  }
  return (
    <>
      <div id='login' className={style.loginContainer}>
        {/*<div className={style.Tabs_Login}>*/}
        <PageTitle className={style.title} title='Войти в аккаунт' />
        {/*<Tabs*/}
        {/*  onChange={() => console.log('selected')}*/}
        {/*  defaultActiveKey='1'*/}
        {/*  centered*/}
        {/*  className={style.Tabs_Login}*/}
        {/*>*/}
        {/*<TabPane tab='Клиент' key='1'>*/}

        <Loginization />

        {/*</TabPane>*/}
        {/*<TabPane tab='Поставщик' key='2'>*/}
        {/*  <UniversalLoginization />*/}
        {/*</TabPane>*/}
        {/*<TabPane tab='Производитель' key='3'>*/}
        {/*  <UniversalLoginization />*/}
        {/*</TabPane>*/}
        {/*</Tabs>*/}
        {/*</div>*/}
      </div>
    </>
  );
};
