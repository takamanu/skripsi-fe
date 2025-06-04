import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Button, theme } from "antd";

import Sidebar from "../../component/sidebar";
import TablesAfter from "../../component/tableAfter";

const { Header, Content } = Layout;
const DataCleaning = () => {
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
            <TablesAfter />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DataCleaning;
