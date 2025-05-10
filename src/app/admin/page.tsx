import React, { useEffect } from "react";

import ButtonC from "@/app/home/button";
import LayoutPrivate from "@/components/layout-private";

const admin = () => {
  return (
    <LayoutPrivate>
      <ButtonC />
      <div
        style={{
          background: "black",
        }}
      >
        ddd
      </div>
    </LayoutPrivate>
  );
};

export default admin;
