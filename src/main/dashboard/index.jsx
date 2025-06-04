import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Button, theme } from "antd";
import UnnesLogo from "../../img/unnes-logo.svg";
import Sidebar from "../../component/sidebar";

const { Header, Content } = Layout;
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  // const navigate = useNavigate();
  return (
    <div id="wrapper">
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
            <div id="content-wrapper" className="d-flex flex-column bg-white">
              <div id="content">
                <div className=" container-fluid p-5 text-black text-center">
                  <img
                    src={UnnesLogo}
                    alt=""
                    srcset=""
                    className="mx-auto mb-4"
                  />
                  <h4 className="font-weight-bold mb-4 ">
                    Optimasi <i>XGBoost Classifier</i> dengan <i>SMOTE, SMOTE-Tomek Link</i> untuk Prediksi Penyakit Diabetes
                  </h4>

                  <p className="mt-4 ">
                    diajukan sebagai salah satu syarat untuk memperoleh gelar
                    Sarjana Ilmu Komputer
                  </p>
                  <p>oleh</p>
                  <p>Fauzan Ali Vijsma</p>
                  <p>4611420022</p>
                  <div>
                    <h5 className="font-weight-bold mt-4">
                      PROGRAM STUDI TEKNIK INFORMATIKA
                    </h5>
                    <h5 className="font-weight-bold">
                      FAKULTAS MATEMATIKA DAN ILMU PENGETAHUAN ALAM
                    </h5>
                    <h5 className="font-weight-bold">
                      UNIVERSITAS NEGERI SEMARANG
                    </h5>
                    <h5 className="font-weight-bold">SEMARANG, TAHUN 2025</h5>
                  </div>
                </div>
                {/* End Content */}
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Dashboard;
