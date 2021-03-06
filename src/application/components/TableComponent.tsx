import React from "react";
import { Table } from "antd";

import { useTable } from "../hooks/useTable";

export const TableComponent = () => {
  const { data, columns } = useTable();
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        defaultPageSize: 10,
        showSizeChanger: true,
        pageSizeOptions: ["10", "25"],
        hideOnSinglePage: true,
      }}
    />
  );
};
