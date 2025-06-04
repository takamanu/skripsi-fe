import React, { useEffect, useState } from "react";

import { Table } from "antd";
const columns = [
  {
    title: "Akurasi XGBoost",
    dataIndex: "accRandomForest",
    key: "accRandomForest",
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "Akurasi XGBoost dan SMOTE",
    dataIndex: "accSMOTE",
    key: "accSMOTE",
  },
  {
    title: "Akurasi XGBoost dan SMOTE-Tomek Link",
    dataIndex: "accADASYN",
    key: "accADASYN",
  },
];
const TablesAccuracy = () => {
  const [smote, setSmote] = useState("");
  const [adasyn, setAdasyn] = useState("");
  const [svmSmote, setSvmSmote] = useState("");
  const [rf, setRf] = useState("");
  useEffect(() => {
    const SMOTE = JSON.parse(localStorage?.getItem("acc_SMOTE"));
    const ADASYN = JSON.parse(localStorage.getItem("acc_ADASYN"));
    const SVMSMOTE = JSON.parse(localStorage.getItem("acc_SVM-SMOTE"));
    const RandomForest = JSON.parse(localStorage.getItem("acc_RandomForest"));
    // setDataColoumn(DatasetLocal);
    setSmote(SMOTE);
    setAdasyn(ADASYN);
    setSvmSmote(SVMSMOTE);
    setRf(RandomForest);
  }, []);
  return (
    <Table
      columns={columns}
      dataSource={[
        {
          accRandomForest: `${rf * 100} %`,
          accSMOTE: `${smote * 100} %`,
          accADASYN: `${adasyn * 100} %`,
          accSVMSMOTE: `${svmSmote * 100} %`,
        },
      ]}
    />
  );
};

export default TablesAccuracy;
