import ProductsDetail from "@/app/products/[id]/components/product-details";
import LayoutGeneral from "@/components/layout-general";
import React from "react";

const Page = () => {
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

export default Page;
