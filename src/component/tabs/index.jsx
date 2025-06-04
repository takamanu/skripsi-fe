import React from "react";
import { Tabs } from "antd";
import { AndroidOutlined, AppleOutlined } from "@ant-design/icons";

const onChange = (key) => {
  console.log(key);
};

const Tab = (props) => {
  const items = [
    {
      key: "1",
      label: props?.label1,
      children: props?.tab1,
      Icon: AndroidOutlined,
    },
    {
      key: "2",
      label: props?.label2,
      children: props?.tab2,
      Icon: AndroidOutlined,
    },
    {
      key: "3",
      label: props?.label3,
      children: props?.tab3,
      Icon: AndroidOutlined,
    },
  ];
  return (
    <Tabs
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
      indicatorSize={(origin) => origin - 16}
    />
  );
};

export default Tab;
