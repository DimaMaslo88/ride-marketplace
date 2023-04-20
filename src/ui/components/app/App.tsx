import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HeaderComponent } from '../../header/HeaderComponent';
import { Login } from '../login/Login';
import { MyOrders } from '../../pages/myOrders/MyOrders';

import { MyOrdersHistory } from '../../pages/myOrders/historyOrders/HistoryOrders';
import { CreateService } from '../../pages/createService/CreateService';
import { BasicService } from '../../pages/createService/basic-service/BasicService';
import { PasswordRecovery } from '../universal/PasswordRecovery';
import { Error404 } from '../../pages/404/Error404';
import { Path } from '../../enum/Path';
import { UniversalLoginization } from '../universal/ProviderLoginization';
import ErrorSnackbar from '../universal/ErrorSnackbar/ErrorSnackbar';
import { Footer } from '../footer/Footer';
import { ProviderList } from '../../pages/createService/providers list/Provider-list';

// import { useAppDispatch } from '../../../bll/store';
// import { checkAuthUser } from '../../../bll/reducers/registration-reducer';
//
// import { useSelector } from 'react-redux';
// import { selectIsAuthUser } from '../../../bll/selectors/Selectors';
// import Spinner from '../../../utils/spiner/Spinner';

function App() {
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   debugger;
  //
  //   dispatch(checkAuthUser());
  // }, []);
  // //
  // if (!isAuth) {
  //   return <Spinner />;
  // }

  return (
    <div>
      <HeaderComponent />
      <Routes>
        <Route path='/' element={<Navigate to={Path.basket} />} />
        <Route path={Path.login} element={<Login />} />
        <Route
          path={`${Path.login}/provider`}
          element={<UniversalLoginization />}
        />
        <Route path={Path.basket} element={<MyOrders />} />
        <Route path={`${Path.basket}/my_service`} element={<CreateService />} />
        <Route
          path={`${Path.basket}/my_service/basic_service`}
          element={<BasicService />}
        />
        <Route
          path={`${Path.basket}/my_service/basic_service/provider_list`}
          element={<ProviderList />}
        />
        <Route path='login/recovery_password' element={<PasswordRecovery />} />
        <Route path={`${Path.basket}/history`} element={<MyOrdersHistory />} />

        <Route path='*' element={<Error404 />} />
      </Routes>
      <ErrorSnackbar />
      <Footer />
    </div>
  );
}

export default App;
