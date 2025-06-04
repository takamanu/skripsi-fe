import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Button, theme } from "antd";
import Sidebar from "../../component/sidebar";
import TablesAccuracy from "../../component/tableAccuracy";
import Graph from "../../component/Graph";

const { Header, Content } = Layout;
const Accuracy = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
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
          <div className="mt-5 mx-5">
            <TablesAccuracy />
          </div>
          <div className="mt-5 mx-5 mb-5 bg-white rounded-1">
            <Graph />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Accuracy;
