import React from 'react';
import { Status } from '../../../components/shared/status/Status';
export type DataSourceType = {
  key: string;
  SN: string;
  date: string;
  nameposition: string;
  amount: string;
  price: string;
  status: {
    status: string;
    text: string;
  };
};
export type ColumnsType = {
  title: string;
  dataIndex: string;
  align?: any;
  key: string;
  width?: string;
};
export const dataSource = [
  {
    key: '1',
    SN: '1',
    date: '28.06.2020',
    nameposition: 'Мерседес бенс',
    amount: '1',
    price: '2000',
    status: {
      status: 'rejected',
      text: 'Отменен',
    },
  },
  {
    key: '2',
    SN: '2',
    date: '28.06.2020',
    nameposition: 'Мерседес бенс',
    amount: '1',
    price: '2000',
    status: {
      status: 'done',
      text: 'Выполнен',
    },
  },
  {
    key: '3',
    SN: '3',
    date: '28.06.2020',
    nameposition: 'Мерседес бенс',
    amount: '1',
    price: '2000',
    status: {
      status: 'consideration',
      text: 'В работе',
    },
  },
];
export const columns = [
  {
    title: '№',
    dataIndex: 'SN',
    align: 'left',
    key: 'SN',
  },
  {
    title: 'Дата',
    dataIndex: 'date',
    align: 'center',
    key: 'id',
  },
  {
    title: 'Наименование',
    dataIndex: 'nameposition',
    align: 'center',
    key: 'investmentsSum',
    width: '200px',
  },
  {
    title: 'Кол-во(шт)',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Статус',
    dataIndex: 'status',
    key: 'status',
    render: ({ status, text }: any) => {
      return <Status className={status}> {text}</Status>;
    },
  },
  {
    title: 'Стоимость',
    dataIndex: 'price',
    key: 'price',
  },
];
