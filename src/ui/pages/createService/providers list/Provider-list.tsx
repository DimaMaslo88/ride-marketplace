import React, { useEffect } from 'react';
import style from '../../../../styles/MyOrder.module.scss';
import { OrderCreation } from '../../../../ui/components/shared/orderCreation/OrderCreation';
import { PageTitle } from '../../../../ui/components/shared/pageTitle/PageTitle';
import { useNavigate } from 'react-router-dom';
import s from '../../../../styles/CreateService.module.scss';
import CompaniesLogo from '../../../../image/CompaniesLogo.svg';
import { useAppDispatch } from '../../../../bll/store';
import { GetCompanies } from '../../../../bll/reducers/companies-reducer';
import { useSelector } from 'react-redux';
import { selectCompanies } from '../../../../bll/selectors/Selectors';
import styles from '../../../../styles/CompaniesList.module.scss';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { setClientOrdersToProvider } from '../../../../bll/reducers/client-service-reducer';
export const ProviderList = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const companies = useSelector(selectCompanies);
  const setOrderOnServerHandler = () => {
    dispatch(setClientOrdersToProvider());
  };
  const goBack = () => {
    return navigate('/basket/my_service/basic_service');
  };
  useEffect(() => {
    dispatch(GetCompanies());
  }, []);

  return (
    <>
      <div className={style.MyOrders}>
        <OrderCreation />
        <div className={style.MyOrders__History}>
          <p>Создать услугу / Базовый набор / Список поставщиков</p>
          <PageTitle className={style.title} title='Список поставщиков' />
          <div onClick={goBack} style={{ cursor: 'pointer' }}>
            Вернуться к списку услуг
          </div>
          <div className={s.createService}>
            <h4 style={{ paddingLeft: '30px' }}> Лучшие предложения: </h4>
            {companies.map(({ id, title }) => (
              <div key={id} className={styles.companiesLogo}>
                <div>
                  <img src={CompaniesLogo} />
                </div>
                <div>
                  Компания <span style={{ color: '#A75C5C' }}>{title}</span>
                </div>
                <div>
                  <ArrowForwardIosIcon onClick={setOrderOnServerHandler} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
