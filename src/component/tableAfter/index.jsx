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

const Tables = () => {
  const [dataColumn, setDataColumn] = useState([]);

  useEffect(() => {
    try {
      const rawData = localStorage.getItem("DatasetLabelEncode");
      const parsedData = rawData ? JSON.parse(rawData) : [];
      if (Array.isArray(parsedData)) {
        setDataColumn(parsedData);
      } else {
        console.warn("DatasetLabelEncode is not an array", parsedData);
        setDataColumn([]);
      }
    } catch (error) {
      console.error("Failed to parse DatasetLabelEncode from localStorage", error);
      setDataColumn([]);
    }
  }, []);

  return (
    <Table
      columns={columns}
      scroll={{ x: 240 }}
      dataSource={dataColumn?.map((item, index) => ({
        key: index,
        pregnancies: item?.[0],
        glucose: item?.[1],
        bloodPressure: item?.[2],
        skinThickness: item?.[3],
        insulin: item?.[4],
        bmi: item?.[5],
        dpf: item?.[6], // diabetes pedigree function
        age: item?.[7],
        outcome: item?.[8],
      }))}
    />
  );
};

export default Tables;
