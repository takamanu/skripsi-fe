import React, { useEffect, useState } from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Pradipta et al., 2021",
    dataIndex: "Pradipta",
    key: "Pradipta",
  },
  {
    title: "Asniar et al., 2022",
    dataIndex: "Asniar",
    key: "Asniar",
  },
  {
    title: "Thejas et al., 2022",
    dataIndex: "Thejas",
    key: "Thejas",
  },
  {
    title: "Proposed Method (2023)",
    dataIndex: "Proposed",
    key: "Proposed",
  },
];

const TablesRelatedWorks = () => {
  const [proposed, setProposed] = useState(0);
  useEffect(() => {
    const proposedAcc = JSON.parse(localStorage.getItem("acc_SVM-SMOTE"));
    setProposed(proposedAcc || 0);
  }, []);

  return (
    <Table
      columns={columns}
      dataSource={[
        {
          key: "1",
          Pradipta: (0.8125 * 100).toFixed(2) + "%",
          Asniar: (0.7513 * 100).toFixed(2) + "%",
          Thejas: (0.7586 * 100).toFixed(2) + "%",
          Proposed: (proposed * 100).toFixed(2) + "%",
        },
      ]}
      pagination={false}
    />
  );
};

export default TablesRelatedWorks;
