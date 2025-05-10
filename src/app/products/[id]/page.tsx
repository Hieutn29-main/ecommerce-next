import ProductsDetail from "@/app/products/[id]/components/product-details";
import LayoutGeneral from "@/components/layout-general";
import React from "react";

const page = () => {
  return (
    <LayoutGeneral>
      <div
        style={{
          background: "#EFEEEA",
          paddingTop: "20px",
        }}
      >
        <ProductsDetail />
      </div>
    </LayoutGeneral>
  );
};

export default page;
