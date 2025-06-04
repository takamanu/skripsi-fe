import React, { useEffect, useState } from "react";

import { Table } from "antd";
const columns = [
  {
    title: "state",
    dataIndex: "state",
    key: "state",
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "account length",
    dataIndex: "account_length",
    key: "account length",
  },
  {
    title: "area code",
    dataIndex: "area_code",
    key: "area code",
  },
  {
    title: "international plan",
    dataIndex: "international_plan",
    key: "international plan",
  },
  {
    title: "voice mail plan",
    dataIndex: "voice_mail_plan",
    key: "voice mail plan",
  },
  {
    title: "number vmail messages",
    dataIndex: "number_vmail_messages",
    key: "number vmail messages",
  },
  {
    title: "total day minutes",
    dataIndex: "total_day_minutes",
    key: "total day minutes",
  },
  {
    title: "total day calls",
    dataIndex: "total_day_calls",
    key: "total day calls",
  },
  {
    title: "total day charge",
    dataIndex: "total_day_charge",
    key: "total day charge",
  },
  {
    title: "total eve minutes",
    dataIndex: "total_eve_minutes",
    key: "total eve minutes",
  },
  {
    title: "total eve calls",
    dataIndex: "total_eve_calls",
    key: "total eve calls",
  },
  {
    title: "total eve charge",
    dataIndex: "total_eve_charge",
    key: "total eve charge",
  },
  {
    title: "total night minutes",
    dataIndex: "total_night_minutes",
    key: "total night minutes",
  },
  {
    title: "total night calls",
    dataIndex: "total_night_calls",
    key: "total night calls",
  },
  {
    title: "total night charge",
    dataIndex: "total_night_charge",
    key: "total night charge",
  },
  {
    title: "total intl minutes",
    dataIndex: "total_intl_minutes",
    key: "total intl minutes",
  },
  {
    title: "total intl calls",
    dataIndex: "total_intl_calls",
    key: "total intl calls",
  },
  {
    title: "total intl charge",
    dataIndex: "total_intl_charge",
    key: "total intl charge",
  },
  {
    title: "customer service calls",
    dataIndex: "customer_service_calls",
    key: "customer service calls",
  },
  {
    title: "churn",
    dataIndex: "churn",
    key: "churn",
  },
];
const Tables = () => {
  const [dataColoumn, setDataColoumn] = useState([]);
  useEffect(() => {
    const DatasetLocal = JSON.parse(localStorage.getItem("DatasetLabelEncode"));
    console.log(DatasetLocal);
    setDataColoumn(DatasetLocal);
  }, []);
  return (
    <Table
      columns={columns}
      scroll={{ x: 240 }}
      dataSource={dataColoumn?.map((item, index) => {
        console.log("dataLabel", item[20]);
        return {
          state: item?.[0],
          account_length: item?.[1],
          area_code: item?.[2],
          international_plan: item?.[3],
          voice_mail_plan: item?.[4],
          number_vmail_messages: item?.[5],
          total_day_minutes: item?.[6],
          total_day_calls: item?.[7],
          total_day_charge: item?.[8],
          total_eve_minutes: item?.[9],
          total_eve_calls: item?.[10],
          total_eve_charge: item?.[11],
          total_night_minutes: item?.[12],
          total_night_calls: item?.[13],
          total_night_charge: item?.[14],
          total_intl_minutes: item?.[15],
          total_intl_calls: item?.[16],
          total_intl_charge: item?.[17],
          customer_service_calls: item?.[18],
          churn: item?.[19],
        };
      })}
    />
  );
};

export default Tables;
