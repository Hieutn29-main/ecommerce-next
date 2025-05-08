"use client";

import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from "next/router";

interface LayoutPage_I {
  children: ReactNode;
}

const queryClient = new QueryClient();
const LayoutPageConfig: React.FC<LayoutPage_I> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default LayoutPageConfig;
