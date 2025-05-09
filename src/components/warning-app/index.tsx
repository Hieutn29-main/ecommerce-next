"use client";
import { WarningWrapper } from "@/components/warning-app/styled";
import { WARNING_APP } from "@/message";
import React, { useEffect, useState } from "react";

const WarningApp = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return (
    <WarningWrapper>
      <h1>{WARNING_APP}</h1>
    </WarningWrapper>
  );
};

export default WarningApp;
