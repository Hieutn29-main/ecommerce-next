"use client";
import { SidebarPrivateWrapper } from "@/components/layout-private/components/sidebar-private/styled";
import React, { useState } from "react";
import { RadarChartOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import useMounted from "@/hooks/useMounted";
import { useRouter } from "next/navigation";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  //   { key: "3", icon: <ContainerOutlined />, label: "Option 3" },
  {
    key: "/admin/products",
    label: "Products",
    icon: <RadarChartOutlined />,
    children: [
      { key: "/admin/products/get-all", label: "All products" },
      { key: "6", label: "Option 6" },
      { key: "7", label: "Option 7" },
      { key: "8", label: "Option 8" },
    ],
  },
];
const SidebarPrivate = () => {
  const { isMounted } = useMounted();
  const router = useRouter();
  if (!isMounted) return null;
  return (
    <SidebarPrivateWrapper>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
        onSelect={({ key, selectedKeys, item }) => {
          router.push(key);
        }}
      />
    </SidebarPrivateWrapper>
  );
};

export default SidebarPrivate;
