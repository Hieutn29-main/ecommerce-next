"use client";
import { SidebarPrivateWrapper } from "@/components/layout-private/components/sidebar-private/styled";

import React, { useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import useMounted from "@/hooks/useMounted";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  //   { key: "3", icon: <ContainerOutlined />, label: "Option 3" },
  {
    key: "/admin/products",
    label: "Products",
    icon: <MailOutlined />,
    children: [
      { key: "/admin/products", label: "Option 5" },
      { key: "6", label: "Option 6" },
      { key: "7", label: "Option 7" },
      { key: "8", label: "Option 8" },
    ],
  },
];
const SidebarPrivate = () => {
  const { isMounted } = useMounted();

  if (!isMounted) return null;
  return (
    <SidebarPrivateWrapper>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
        onSelect={({ key, selectedKeys, item }) => {
          console.log("Selected key:", key); // key vừa được chọn
          console.log("All selected keys:", selectedKeys); // danh sách các key được chọn (nếu multiple)
          console.log("Selected item:", item); // toàn bộ React element
        }}
      />
    </SidebarPrivateWrapper>
  );
};

export default SidebarPrivate;
