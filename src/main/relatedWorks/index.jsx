import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, theme } from "antd";
import Sidebar from "../../component/sidebar";
import { Content, Header } from "antd/es/layout/layout";
import TablesRelatedWorks from "../../component/tableRelatedWorks";
import GraphRelatedWorks from "../../component/graphRelatedWorks";

const RelatedWorks = () => {
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
            <TablesRelatedWorks />
          </div>
          <div className="mt-5 mx-5 bg-white rounded-1 mb-5">
            <GraphRelatedWorks />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default RelatedWorks;
