import React from 'react';

import style from '../../../styles/Tabs.module.scss';
import { useNavigate } from 'react-router-dom';
import { Tabs } from 'antd';

export const TabsMenu = () => {
  const navigate = useNavigate();
  const items = [
    { label: 'Меню', key: '1' },
    { label: 'Меню', key: '2' },
  ];
  const onChangeHandler = () => {
    //не работает
    if (items.filter((f) => f.key === '1')) {
      return navigate('/');
    } else {
      return navigate('/provider');
    }
  };
  return (
    <Tabs
      className={style.tabs}
      onChange={onChangeHandler}
      defaultActiveKey='1'
      centered
      items={items}
    >
      {/*<TabPane  tab="Меню" key="1"></TabPane>*/}
      {/*<TabPane tab="Меню" key="2"></TabPane>*/}
      {/*<TabPane tab="Меню" key="3"></TabPane>*/}
    </Tabs>
  );
};
