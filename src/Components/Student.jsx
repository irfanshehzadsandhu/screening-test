import React from "react";
import {Table} from "antd";
import ClientName from "./ClientName";

const Student = (props) => {
  const {students} = props;
  console.log("*************", students[0]);
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'name',
      render: (text, record) => <ClientName url={record.avatar}/>,
    }

  ];
  return <Table dataSource={students} columns={columns}/>;
}

  export default Student;