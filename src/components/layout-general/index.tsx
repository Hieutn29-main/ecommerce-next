import React, { Fragment, ReactNode } from "react";
import HeaderApp from "@/components/header";
import WarningApp from "@/components/warning-app";
import FooterApp from "@/components/footer";
interface LayoutGeneral_I {
  children: ReactNode;
}

const LayoutGeneral: React.FC<LayoutGeneral_I> = ({ children }) => {
  return (
    <Fragment>
      <WarningApp />
      <HeaderApp />
      {children}
      <FooterApp />
    </Fragment>
  );
};

export default LayoutGeneral;
