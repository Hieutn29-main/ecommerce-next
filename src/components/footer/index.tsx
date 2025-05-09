"use client";
import { FooterWrapper } from "@/components/footer/styled";
import React, { useEffect, useState } from "react";

const FooterApp = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return (
    <FooterWrapper>
      © {new Date().getFullYear()} Dummy JSON Demo — For learning purposes only.
    </FooterWrapper>
  );
};

export default FooterApp;
