import React, { useState } from 'react';
import { BasketIcon } from '../orderMenu/basketIcon/BasketIcon';
import { CatalogIcon } from '../orderMenu/catalogIcon/CatalogIcon';
import { SettingIcon } from '../orderMenu/settingIcon/SettingIcon';
import styles from '../../../../styles/OrderMenu.module.scss';
import { NavLink } from 'react-router-dom';

export const OrderMenu = () => {
  const [active, setActive] = useState(false);
  const [activeCatalog, setActiveCatalog] = useState(false);

  function handelClick() {
    setActive(false);
    setActiveCatalog(false);
  }

  return (
    <div className={styles.container}>
      <NavLink
        onClick={handelClick}
        to='/basket'
        className={({ isActive }) =>
          isActive && !active && !activeCatalog
            ? styles.linkactive
            : styles.link
        }
      >
        <BasketIcon className={styles.logo} variant={''} /> Мои заказы
      </NavLink>

      <NavLink
        onClick={handelClick}
        to='/catalog'
        className={({ isActive }) =>
          isActive && !active && !activeCatalog
            ? styles.linkactive
            : styles.link
        }
      >
        <CatalogIcon className={styles.logo} variant={''} />
        Каталог
      </NavLink>
      <NavLink
        onClick={handelClick}
        to='/settings'
        className={({ isActive }) =>
          isActive && !active && !activeCatalog
            ? styles.linkactive
            : styles.link
        }
      >
        <SettingIcon className={styles.logo} variant={''} />
        Настройки
      </NavLink>
    </div>
  );
};
