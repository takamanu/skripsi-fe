import Sidebar from "../../component/sidebar";
import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, theme } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import {
  AreaChartOutlined,
  DatabaseFilled,
  FileFilled,
  HomeFilled,
  FundFilled,
  QuestionCircleFilled,
  GoldenFilled,
} from "@ant-design/icons";

export default function About() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const aboutData = [
    {
      logo: <HomeFilled />,
      title: "Home",
      desc: "Pada menu Home menampilkan informasi algoritma serta metode yang digunakan dalam penelitian yang terkandung dalam judul.",
    },
    {
      logo: <FileFilled />,
      title: "Data",
      desc: "Menu Data digunakan sebagai upload dataset dan menampilkan informasi dataset dalam bentuk data visualisasi tabel.",
    },
    {
      logo: <DatabaseFilled />,
      title: "Preprocessing",
      desc: "Menu Preprocessing berisi mengenai rincian dataset yang telah dilakukan data cleaning seperti penghapusan atribut serta data transformasi menggunakan label encoding.",
    },
    {
      logo: <FundFilled />,
      title: "Oversampling",
      desc: "Menu Oversampling menampilkan perbandingan mengenai informasi data dan visualisasi sebelum dan sesudah dilakukannya oversampling. Metode oversampling yang digunakan diantaranya SMOTE, ADASYN, dan SVM-SMOTE. ",
    },
    {
      logo: <AreaChartOutlined />,
      title: "Evaluation Performance",
      desc: "Menu Evaluasi Performa berisi mengenai informasi akurasi dan confusion matrix setelah dilakukannya proses Oversampling SMOTE, ADASYN, dan SVM-SMOTE serta Random Forest Klasifikasi.",
    },
    {
      logo: <GoldenFilled />,
      title: "Related Works",
      desc: "Menu Related Works merupakan menu yang menampilkan perbandingan akurasi dengan penelitian terdahulu yang disajikan dalam bentuk tabel dan grafik.",
    },
    {
      logo: <QuestionCircleFilled />,
      title: "About",
      desc: "Menu About menampilkan rangkuman informasi menu yang terdapat dalam website.",
    },
  ];
  return (
    <div>
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
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-start ">
                  {aboutData?.map((data, i) => {
                    return (
                      <div className="col mb-4">
                        <div
                          className="rounded-3 text-black h-100 px-4 py-3 border border-black"
                          key={i}
                        >
                          <div className="d-flex gap-2">
                            <div className="">{data?.logo}</div>
                            <div className="">{data?.title}</div>
                          </div>
                          <div className="mt-2 text-justify">{data?.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
