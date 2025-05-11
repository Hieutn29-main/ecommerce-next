"use client";
import {
  ChildrenWrapper,
  ContentPrivateWrapper,
  LayoutPrivateWrapper,
} from "@/components/layout-private/styled";
import React, { ReactNode } from "react";
import { ConfigProvider, theme, Layout } from "antd";
import HeaderPrivate from "@/components/layout-private/components/header-private";
import FooterPrivate from "@/components/layout-private/components/footer-private";
import SidebarPrivate from "@/components/layout-private/components/sidebar-private";
import useMounted from "@/hooks/useMounted";

const { Header, Footer, Sider, Content } = Layout;
interface LayoutGeneral_I {
  children: ReactNode;
}
const themeConfig = {
  token: {
    colorPrimary: "black",
    colorLink: "black",
    colorText: "black",
  },
  components: {
    Menu: {
      colorItemText: "#EB5B00",
      colorItemTextHover: "#EB5B00",
      colorItemTextSelected: "#EB5B00",
      colorItemTextSelectedHorizontal: "#EB5B00",
      colorSubItemText: "#EB5B00",
      colorItemBgSelected: "#F8F5E9",
      colorPrimary: "#EB5B00",
      colorLink: "#EB5B00",
      colorText: "#EB5B00",
    },
    Button: {
      colorPrimary: "#EB5B00",
      colorPrimaryHover: "#cc4a00",
    },
    Tabs: {
      itemSelectedColor: "#EB5B00",
    },
    Checkbox: {
      colorPrimary: "#EB5B00",
    },
    Input: {
      activeBorderColor: "#EB5B00",
      hoverBorderColor: "#EB5B00",
    },
    // Thêm các components khác nếu cần
  },
  algorithm: theme.defaultAlgorithm,
};
const LayoutPrivate: React.FC<LayoutGeneral_I> = ({ children }) => {
  const { isMounted } = useMounted();
  if (!isMounted) return null;
  return (
    <LayoutPrivateWrapper>
      <ConfigProvider theme={themeConfig}>
        <HeaderPrivate />
        <ContentPrivateWrapper>
          <SidebarPrivate />
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </ContentPrivateWrapper>
        <FooterPrivate />
      </ConfigProvider>
    </LayoutPrivateWrapper>
  );
};

export default LayoutPrivate;
