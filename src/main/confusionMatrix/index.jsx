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
            {/* random forest  */}
            <div className="col">
              <div className="text-center ">
                <h1
                  className="text-center text-black text-sm-center "
                  style={{ fontSize: 20 }}
                >
                  Confusion Matrix Algoritma Random Forest
                </h1>
                <img
                  src="http://127.0.0.1:5000/images/Random Forest.png"
                  alt=""
                  srcset=""
                  style={{ width: 500, marginBottom: 20 }}
                />
              </div>
            </div>
            {/*  random forest & smote*/}
            <div className="col">
              <div className="text-center">
                <h1
                  className="text-center text-black text-sm-center "
                  style={{ fontSize: 20 }}
                >
                  Confusion Matrix Algoritma SMOTE & Random Forest
                </h1>
                <img
                  src="http://127.0.0.1:5000/images/Random Forest & SMOTE.png"
                  alt=""
                  srcset=""
                  style={{ width: 500, marginBottom: 20 }}
                />
              </div>
            </div>
            {/*  random forest &  adasyn*/}
            <div className="col">
              <div className="text-center">
                <h1
                  className="text-center text-black text-sm-center "
                  style={{ fontSize: 20 }}
                >
                  Confusion Matrix Algoritma ADASYN & Random Forest
                </h1>
                <img
                  src="http://127.0.0.1:5000/images/Random Forest & ADASYN.png"
                  alt=""
                  srcset=""
                  style={{ width: 500, marginBottom: 20 }}
                />
              </div>
            </div>
            {/*  random forest & svm-smote*/}
            <div className="col">
              <div className="text-center">
                <h1
                  className="text-center text-black text-sm-center "
                  style={{ fontSize: 20 }}
                >
                  Confusion Matrix Algoritma SVM-SMOTE Random Forest
                </h1>
                <img
                  src="http://127.0.0.1:5000/images/Random Forest & SVM-SMOTE.png"
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
