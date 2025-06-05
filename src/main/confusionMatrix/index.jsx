import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, theme } from "antd";
import Sidebar from "../../component/sidebar";
import { Content, Header } from "antd/es/layout/layout";

const ConfusionMatrix = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  //   useEffect(()=>{
  //   },[])
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
          <div className="row row-cols-1  row-cols-md-2 mt-5 justify-content-evenly">
            {/* xg boost */}
            <div className="col">
              <div className="text-center ">
                <h1
                  className="text-center text-black text-sm-center "
                  style={{ fontSize: 20 }}
                >
                  Confusion Matrix Algoritma XG Boost
                </h1>
                <img
                  src="http://127.0.0.1:5000/images/ConfusionMatrixXGBoost.png"
                  alt=""
                  srcset=""
                  style={{ width: 500, marginBottom: 20 }}
                />
              </div>
            </div>
            {/*  xg boost & smote*/}
            <div className="col">
              <div className="text-center">
                <h1
                  className="text-center text-black text-sm-center "
                  style={{ fontSize: 20 }}
                >
                  Confusion Matrix Algoritma SMOTE & XG Boost
                </h1>
                <img
                  src="http://127.0.0.1:5000/images/ConfusionMatrixSMOTEAndXGBoost.png"
                  alt=""
                  srcset=""
                  style={{ width: 500, marginBottom: 20 }}
                />
              </div>
            </div>
            {/*  xg boost &  adasyn*/}
            <div className="col">
              <div className="text-center">
                <h1
                  className="text-center text-black text-sm-center "
                  style={{ fontSize: 20 }}
                >
                  Confusion Matrix Algoritma SMOTE-Tomek Link & XG Boost
                </h1>
                <img
                  src="http://127.0.0.1:5000/images/ConfusionMatrixSMOTETomekLinkAndXGBoost.png"
                  alt=""
                  srcset=""
                  style={{ width: 500, marginBottom: 20 }}
                />
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ConfusionMatrix;
