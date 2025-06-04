import { Layout } from "antd";
import React, { useState } from "react";
import Sidebar from "../../component/sidebar";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Content, Header } from "antd/es/layout/layout";
import { Button, theme } from "antd";

const DataVisualisation = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div className="row mt-5 gap-3">
      <div className="col">
        <div className="text-center">
          <h1
            className="text-center text-black text-sm-center "
            style={{ fontSize: 20 }}
          >
            Visualisasi Data Sebelum Data Cleaning
          </h1>
          <img
            src="http://127.0.0.1:5000/images/Before Data Cleaning.png"
            alt=""
            srcset=""
            style={{ width: 500 }}
          />
        </div>
      </div>
      <div className="col">
        <div className="text-center">
          <h1
            className="text-center text-black text-sm-center "
            style={{ fontSize: 20 }}
          >
            Visualisasi Data Setelah Data Cleaning
          </h1>
          <img
            src="http://127.0.0.1:5000/images/After Data Cleaning.png"
            alt=""
            srcset=""
            style={{ width: 500 }}
          />
        </div>
      </div>
    </div>
  );
};

export default DataVisualisation;
