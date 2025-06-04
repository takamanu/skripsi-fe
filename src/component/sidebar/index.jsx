import React from "react";
import {
  CloudUploadOutlined,
  AreaChartOutlined,
  BarChartOutlined,
  DatabaseFilled,
  FileSyncOutlined,
  FileFilled,
  HomeFilled,
  FundFilled,
  CheckSquareOutlined,
  ClearOutlined,
  PieChartOutlined,
  QuestionCircleFilled,
  GoldenFilled,
} from "@ant-design/icons";
import "../../css/sb-admin-2.css";
import "../../css/sb-admin-2.min.css";
import { useNavigate } from "react-router-dom";
import Sider from "antd/es/layout/Sider";
import { Menu } from "antd";
const items = [
  {
    key: "/",
    icon: <HomeFilled />,
    label: "Home",
  },
  {
    icon: <FileFilled />,
    label: "Data",
    children: [
      {
        key: "/upload-file",
        icon: <CloudUploadOutlined />,
        label: "Upload Dataset",
      },
      {
        key: "/data-visualisation",
        icon: <BarChartOutlined />,
        label: "Data Visualisation",
      },
    ],
  },
  {
    icon: <DatabaseFilled />,
    label: "Preprocessing",
    children: [
      {
        key: "/data-cleaning",
        icon: <ClearOutlined />,
        label: "Data Cleaning",
      },
      {
        key: "/data-transform",
        icon: <FileSyncOutlined />,
        label: "Data Transform",
      },
    ],
  },
  {
    icon: <FundFilled />,
    label: "Oversampling",
    children: [
      {
        key: "/oversampling-smote",
        icon: <CheckSquareOutlined />,
        label: "SMOTE",
      },
      {
        key: "/oversampling-adasyn",
        icon: <CheckSquareOutlined />,
        label: "ADASYN",
      },
      {
        key: "/oversampling-svm-smote",
        icon: <CheckSquareOutlined />,
        label: "SVM-SMOTE",
      },
    ],
  },
  {
    icon: <AreaChartOutlined />,
    label: "Evaluation Performance",
    children: [
      {
        key: "/confusion-matrix",
        icon: <PieChartOutlined />,
        label: "Confusion Matrix",
      },
      {
        key: "/akurasi",
        icon: <PieChartOutlined />,
        label: "Accuracy",
      },
    ],
  },
  {
    key: "/related-works",
    icon: <GoldenFilled />,
    label: "Related Works",
  },
  {
    key: "/about",
    icon: <QuestionCircleFilled />,
    label: "About",
  },
];
const Sidebar = (props) => {
  const navigate = useNavigate();
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={props.collapsed}
      style={{ backgroundColor: "#cc9900" }}
    >
      <div className="demo-logo-vertical" />
      <Menu theme="#cc9900" mode="inline">
        <h1 className="text-center text-lg mt-3 mb-3 font-weight-bold">
          Churn Check
        </h1>
      </Menu>
      <Menu
        theme="#cc9900"
        mode="inline"
        defaultSelectedKeys={["/"]}
        onClick={({ key }) => {
          navigate(key);
        }}
        items={items}
        className="font-weight-bold"
      />
    </Sider>
  );
};

export default Sidebar;
