import React, { useEffect, useState } from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Pregnancies",
    dataIndex: "pregnancies",
    key: "pregnancies",
  },
  {
    title: "Glucose",
    dataIndex: "glucose",
    key: "glucose",
  },
  {
    title: "Blood Pressure",
    dataIndex: "bloodPressure",
    key: "bloodPressure",
  },
  {
    title: "Skin Thickness",
    dataIndex: "skinThickness",
    key: "skinThickness",
  },
  {
    title: "Insulin",
    dataIndex: "insulin",
    key: "insulin",
  },
  {
    title: "BMI",
    dataIndex: "bmi",
    key: "bmi",
  },
  {
    title: "Diabetes Pedigree Function",
    dataIndex: "dpf",
    key: "dpf",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Outcome",
    dataIndex: "outcome",
    key: "outcome",
  },
];

const TablesAfter = () => {
  const [dataColumn, setDataColumn] = useState([]);

  useEffect(() => {
    const DatasetLocal = JSON.parse(localStorage.getItem("Dataset"));
    setDataColumn(DatasetLocal);
  }, []);

  return (
    <Table
      columns={columns}
      scroll={{ x: 240 }}
      dataSource={dataColumn?.map((item, index) => {
        return {
          key: index,
          pregnancies: item?.[0],
          glucose: item?.[1],
          bloodPressure: item?.[2],
          skinThickness: item?.[3],
          insulin: item?.[4],
          bmi: item?.[5],
          dpf: item?.[6], 
          age: item?.[7],
          outcome: item?.[8],
        };
      })}
    />
  );
};

export default TablesAfter;
