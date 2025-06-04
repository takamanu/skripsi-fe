import React, { useEffect, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Button, theme } from "antd";
import Sidebar from "../../component/sidebar";
import Tabs from "../../component/tabs";
import TableOversampling from "../../component/tableOversampling";
import GraphAfter from "../../component/graphAfter";
import GraphBefore from "../../component/graphBefore";

const { Header, Content } = Layout;
const OversamplingADASYN = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [dataADASYN, setdataADASYN] = useState([]);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("dataFrame_ADASYN"));
    console.log(data);
    setdataADASYN(data);
  }, []);
  return (
    <Layout>
      <Sidebar collapsed={collapsed} />
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content style={{ minHeight: 700 }}>
          <div className="p-5">
            <Tabs
              label1={"Visualisasi"}
              tab1={
                <div className="mt-2 bg-white rounded-1 mb-4">
                  <div className="row">
                    <div className="col-12 col-md-6 mb-4 pt-4">
                      <h1
                        className="text-center text-black text-sm-center mb-5"
                        style={{ fontSize: 20 }}
                      >
                        Sebelum Oversampling
                      </h1>
                      <GraphBefore />
                    </div>
                    <div className="col-12 col-md-6 mb-4 pt-4">
                      <h1
                        className="text-center text-black text-sm-center mb-5"
                        style={{ fontSize: 20 }}
                      >
                        Setelah Oversampling
                      </h1>
                      <GraphAfter />
                    </div>{" "}
                  </div>
                </div>
              }
              label2={"Dataset"}
              tab2={<TableOversampling dataColoumn={dataADASYN} />}
            />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default OversamplingADASYN;
