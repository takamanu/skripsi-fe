import React, { useEffect, useState } from "react";

import { Table } from "antd";

const columns = [
  {
    title: "Ullah (2019)",
    dataIndex: "Ullah",
    key: "Ullah",
  },
  {
    title: "AlShourbaji (2021)",
    dataIndex: "AlShourbaji",
    key: "AlShourbaji",
  },
  {
    title: "Pustokhina (2021)",
    dataIndex: "Pustokhina",
    key: "Pustokhina",
  },
  {
    title: "Amin (2019)",
    dataIndex: "Amin",
    key: "Amin",
  },
  {
    title: "Proposed Method (2023)",
    dataIndex: "Proposed",
    key: "Proposed",
  },
];
const TablesRelatedWorks = () => {
  const [proposed, setProposed] = useState([]);
  useEffect(() => {
    const proposedAcc = JSON.parse(localStorage.getItem("acc_SVM-SMOTE"));
    setProposed(proposedAcc);
  }, []);
  return (
    <Table
      columns={columns}
      dataSource={[
        {
          Ullah: [0.8863 * 100] + "%",
          AlShourbaji: [0.94 * 100] + "%",
          Pustokhina: [0.94 * 100] + "%",
          Amin: [0.927 * 100] + "%",
          Proposed: [proposed * 100] + "%",
        },
      ]}
    />
  );
};

export default TablesRelatedWorks;
