import React, { Fragment, ReactNode } from "react";
import HeaderApp from "@/components/header";
interface LayoutGeneral_I {
  children: ReactNode;
}

const LayoutGeneral: React.FC<LayoutGeneral_I> = ({ children }) => {
  return (
    <Fragment>
      <HeaderApp />
      {children}
    </Fragment>
  );
};

export default LayoutGeneral;
