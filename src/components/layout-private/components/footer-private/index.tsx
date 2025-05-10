"use client";
import { FooterPrivateWrapper } from "@/components/layout-private/components/footer-private/styled";
import React from "react";

const FooterPrivate = () => {
  return (
    <FooterPrivateWrapper>
      © {new Date().getFullYear()} Dummy JSON Demo — For learning purposes only.
    </FooterPrivateWrapper>
  );
};

export default FooterPrivate;
