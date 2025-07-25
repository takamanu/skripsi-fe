import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Button, theme, InputNumber, Form, Row, Col, message } from "antd";
import Sidebar from "../../component/sidebar";

const { Header, Content } = Layout;

const PredictData = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onFinish = async (values) => {
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Gagal melakukan prediksi");
      }

      const data = await response.json();
      const isDiabetes = data.prediction === 1;
      setResult(isDiabetes ? "Diabetes" : "Tidak Diabetes");
    } catch (error) {
      message.error(error.message || "Terjadi kesalahan.");
    } finally {
      setLoading(false);
    }
  };

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
            <h2 className="mb-4">Form Prediksi Diabetes</h2>
            <Form layout="vertical" onFinish={onFinish}>
              <Row gutter={16}>
                {[
                  { name: "Pregnancies", label: "Pregnancies", min: 0 },
                  { name: "Glucose", label: "Glucose", min: 1 },
                  { name: "BloodPressure", label: "Blood Pressure", min: 1 },
                  { name: "SkinThickness", label: "Skin Thickness", min: 1 },
                  { name: "Insulin", label: "Insulin", min: 1 },
                  { name: "BMI", label: "BMI", min: 1, step: 0.1 },
                  { name: "DiabetesPedigreeFunction", label: "Diabetes Pedigree Function", min: 0, step: 0.01 },
                  { name: "Age", label: "Age", min: 1 },
                ].map((field) => (
                  <Col span={8} key={field.name}>
                    <Form.Item
                      label={field.label}
                      name={field.name}
                      rules={[{ required: true, message: `${field.label} wajib diisi` }]}
                    >
                      <InputNumber
                        min={field.min}
                        step={field.step || 1}
                        className="w-100"
                      />
                    </Form.Item>
                  </Col>
                ))}
              </Row>
              <Button type="primary" htmlType="submit" loading={loading}>
                Prediksi
              </Button>
            </Form>

            {result && (
              <div className="mt-4">
                <h3>Hasil Prediksi:{" "}
                  <span style={{ color: result === "Diabetes" ? "red" : "green" }}>
                    {result}
                  </span>
                </h3>
              </div>
            )}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default PredictData;
