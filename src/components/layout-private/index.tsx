import React, { Fragment, ReactNode } from "react";

interface LayoutGeneral_I {
  children: ReactNode;
}

const LayoutPrivate: React.FC<LayoutGeneral_I> = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

export default LayoutPrivate;
