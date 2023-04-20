import React from 'react';
import { useNavigate } from 'react-router-dom';
import { OrderCreation } from '../../../components/shared/orderCreation/OrderCreation';
import { PageTitle } from '../../../components/shared/pageTitle/PageTitle';
import { TableField } from '../../../components/table/TableField';
import { columns } from './FakeData';
import { dataSource } from './FakeData';
import style from '../../../../styles/HistoryOrder.module.scss';

export const MyOrdersHistory = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={style.MyOrders}>
        <OrderCreation />
        <div className={style.MyOrders__History}>
          <p>Мои заказы</p>
          <PageTitle className='title' title='Мои заказы' />
          <div className={style.ButtonHistory}>
            <button onClick={() => navigate('/basket')}>Заказы</button>
            <button onClick={() => navigate('/basket/history')}>
              История заказов
            </button>
          </div>
          <div className={style.table}>
            <TableField
              dataSource={dataSource}
              columns={columns}
              emptyText='Статистики нет'
              paginationConfig={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};
