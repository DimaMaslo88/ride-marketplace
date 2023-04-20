import React, { useMemo } from 'react';
import { Table } from 'antd';

import {
  ColumnsType,
  DataSourceType,
} from '../../pages/myOrders/historyOrders/FakeData';
import { TablePaginationConfig } from 'antd/es/table/interface';
import style from '../../../styles/TableField.module.scss';
type TableFieldType = {
  dataSource: DataSourceType[];
  columns: ColumnsType[];
  children?: any;
  emptyText: string;
  paginationConfig: false | TablePaginationConfig | undefined;
  className?: string;
};
export const TableField = ({
  dataSource,
  columns,
  children,
  emptyText,
  paginationConfig,
}: TableFieldType) => {
  const tableColumns = useMemo(() => columns, [columns]);

  return (
    <>
      {children}
      <div className={style.table}>
        {/*<div className={cn("table", className)}>*/}
        <Table
          scroll={{ x: '400px' }}
          locale={{ emptyText }}
          pagination={paginationConfig}
          dataSource={dataSource ?? []}
          columns={tableColumns}
        />
      </div>
    </>
  );
};
