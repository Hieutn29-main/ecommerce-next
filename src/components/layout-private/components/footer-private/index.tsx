"use client";
import { FooterPrivateWrapper } from "@/components/layout-private/components/footer-private/styled";
import useMounted from "@/hooks/useMounted";
import React from "react";

const FooterPrivate = () => {
  const { isMounted } = useMounted();

  if (!isMounted) return null;
  return (
    <FooterPrivateWrapper>
      © {new Date().getFullYear()} Dummy JSON Demo — For learning purposes only.
    </FooterPrivateWrapper>
  );
};

export default FooterPrivate;
