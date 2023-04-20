import React from 'react';
import { NavLink, useMatch } from 'react-router-dom';
import style from '../../../../styles/PageTitle.module.scss';
type PageTitleType = {
  title: string;
  children?: React.ReactNode;
  className: string;
  breadcrumbs?: any;
};

export const PageTitle = React.memo(
  ({ title = '', children, className, breadcrumbs }: PageTitleType) => {
    const match = breadcrumbs && useMatch(breadcrumbs.to);
    return (
      <div className={`${style.pageHeader_titleContainer} ${className}`}>
        <div className={style.pageHeader_titleContainer}>
          <h1 title={title} className={style.pageHeader_title}>
            {title}
          </h1>
          {breadcrumbs && (
            <span className='page-header_title-breadcrumbs'>
              {!match ? (
                <NavLink
                  to={breadcrumbs.to}
                  className='page-header_title-breadcrumbs-link'
                >
                  {breadcrumbs.main}
                </NavLink>
              ) : (
                <span>{breadcrumbs.main}</span>
              )}{' '}
              / {breadcrumbs.current}
            </span>
          )}
        </div>
        {children}
      </div>
    );
  }
);
