import React from "react";
import { Tabs } from "antd";

const onChange = (key) => {
  console.log(key);
};

const Tab = (props) => {
  const items = [
    {
      key: "1",
      label: props.label1,
      children: props.tab1,
    },
    {
      key: "2",
      label: props.label2,
      children: props.tab2,
    },
    {
      key: "3",
      label: props.label3,
      children: props.tab3,
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
