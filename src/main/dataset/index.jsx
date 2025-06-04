import Sidebar from "../../component/sidebar";
import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import UploadFile from "../../component/upload";
import { Button, Layout, theme } from "antd";
import { Content, Header } from "antd/es/layout/layout";

function Dataset() {
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
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 700,
            background: colorBgContainer,
          }}
        >
          <div className="mt-5">
            <UploadFile />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Dataset;
