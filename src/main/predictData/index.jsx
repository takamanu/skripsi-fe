import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import {
  Layout,
  Button,
  theme,
  InputNumber,
  Form,
  Row,
  Col,
  Card,
  message,
  Typography,
} from "antd";
import Sidebar from "../../component/sidebar";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

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

    // Hitung BMI
    const heightMeter = values.Height / 100; // cm to meter
    const bmi = (values.Weight / (heightMeter * heightMeter)).toFixed(1);

    // Data final untuk API
    const requestData = {
      Pregnancies: values.Pregnancies || 0,
      Glucose: values.Glucose,
      BloodPressure: values.BloodPressure,
      SkinThickness: 20, // default
      Insulin: 85, // default
      BMI: parseFloat(bmi),
      DiabetesPedigreeFunction: 0.5, // default
      Age: values.Age,
    };

    try {
      const response = await fetch("https://api-pdb.goodbuy.id/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
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
        <Content style={{ padding: "24px", background: "#f4f6f8", minHeight: "100vh" }}>
          <Card
            style={{
              maxWidth: 600,
              margin: "auto",
              borderRadius: 12,
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            }}
          >
            <Title level={3} style={{ textAlign: "center", marginBottom: 8 }}>
              Prediksi Risiko Diabetes
            </Title>
            <Text type="secondary" style={{ display: "block", textAlign: "center", marginBottom: 24 }}>
              Masukkan informasi dasar Anda
            </Text>

            <Form layout="vertical" onFinish={onFinish}>
              <Row gutter={[16, 16]}>
                {[
                  { name: "Age", label: "Usia (tahun)", min: 1 },
                  { name: "Weight", label: "Berat (kg)", min: 1 },
                  { name: "Height", label: "Tinggi (cm)", min: 50 },
                  { name: "Glucose", label: "Gula Darah (mg/dL)", min: 1 },
                  { name: "BloodPressure", label: "Tekanan Darah (mmHg)", min: 1 },
                  { name: "Pregnancies", label: "Jumlah Kehamilan", min: 0 },
                ].map((field) => (
                  <Col xs={24} sm={12} key={field.name}>
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

              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                style={{ width: "100%", marginTop: 12 }}
              >
                Prediksi
              </Button>
            </Form>

            {result && (
              <div style={{ marginTop: 24, textAlign: "center" }}>
                <Title level={4}>
                  Hasil Prediksi:{" "}
                  <span style={{ color: result === "Diabetes" ? "red" : "green" }}>
                    {result}
                  </span>
                </Title>
              </div>
            )}
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};

export default PredictData;
